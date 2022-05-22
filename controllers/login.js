// INITIATE USER.JSON
users = require('../db/users.json');
const { game_user } = require('../models');
const { use } = require('./route');

//LOGGER STATUS
function get(req, res) {
    res.status(200).json(users);
}

//GET USERS BY ID
function getById(req, res) {
    const idx = users.findIndex(x => x.id == req.query.id);
    if (idx == -1) {
        res.status(404).json({
            message: 'User not found'
        });
    } else {
        res.status(200).json(users[idx]);
    }
}
//ROUTE TO LOGIN PAGE
function loginIndex(req, res) {
    res.render('login');
}
//ROUTE TO LOGIN PAGE USER
function loginUSer(req, res) {
    res.render('loginuser');
}
//LOGIN FUNCTION
function login(req, res) {
    const username = req.body.username; //get body of username
    const password = req.body.password; //get body of password

    //MENCOCOKAN EMAIL YANG DI INPUTKAN DENGAN DATABASE
    const dataUsers = users.findIndex(usersInput => usersInput.username === username);
    //KETIKA EMAIL TIDAK SESUAI DENGAN EMAIL YANG ADA DI DATABASE
    if (dataUsers == -1) {
        res.status(403).json({
            message: 'Username is not registered'
        });
    //KETIKA PASSWORD TIDAK SESUAI DENGAN PASSWORD YANG ADA DI DATABASE
    } else {
        if (users[dataUsers].password != password) {
            res.status(403).json({
                message: 'Wrong Password'
            });
        //KETIKA DATA === INPUT (equal value and equal type)
        } else {
            res.status(200)
            res.redirect(req.baseUrl+'/dashboard');
        }
    }
}

//LOGIN USER
async function loginForUser(req, res) {
    
    const username = req.body.username;
    const password = req.body.password;
  
    // CHECK USERNAME ON GAME_USER TABLE
    const userData = await game_user.findOne({
      where: {
        username: username,
      },
    });
  // IF USERNAME NOT REGISTERED
    if (!userData) { 
      return res.status(401).json({
        message: 'Username not registered',
      });
    }
    // CHECK PASSWORD
    if (userData.password !== password) { 
      return res.status(401).json({
        message: 'Wrong Password',
      });
    }

    return res.status(200).redirect('/game');
}
//Export Module to route.js
module.exports = {
    get,
    getById,
    loginIndex,
    login,
    loginUSer,
    loginForUser
}