// users data is load from users.json file
const users = require('../db/users.json');
const { game_user, game_user_biodata } = require('../models');
// IMPORT MODULE FS
const fs = require('fs');


//ROUTE TO REGISTER PAGE
function registerIndex(req, res) {
    res.render('register');
}

//ADD NEW USERS

async function registerData(request, response){

    const username = request.body.username;
    
    const isExist = await game_user.findOne({
        where: {
            username: username,
        },
    });

        if (isExist) {
        return response.status(404).json({
            message: 'Email is already registered',
        });
    }
        
        game_user.create({
        username: request.body.username,
        password: request.body.password,
        email: request.body.email,
        game_user_biodatum: {
            address: request.body.address,
            age: request.body.age,
            phone: request.body.phone,
            gender: request.body.gender,
        }
    }, {
        include: {
            model: game_user_biodata
        }
    })
    .then(()=> {
        response.send('Akun berhasil dibuat')
      })
}

function getAPI(res, req) {
    res.send(users);
}
//Export Module to route.js
module.exports = {
    registerIndex,
    registerData,
    getAPI
}