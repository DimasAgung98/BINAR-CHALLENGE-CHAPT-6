const { append } = require('express/lib/response');
const res = require('express/lib/response');
const {
    game_user,
    game_user_biodata,
    game_user_history
} = require('../models');

//FUNCTION TO ROUTE AND DISPLAY DASHBOARD PAGE
//READ ALL DATA ON DATABASE
function playerList(request, response) {
    game_user.findAll()
    .then(usersList => {
        response.render('dashboard', {
            usersList
        })
    });
}

//FUNCTION TO CREATE NEW USER
function addDataUser(request, response) {
    game_user.create({
        username: request.body.username,
        password: request.body.username,
        email: request.body.email,
        // address: request.body.address,
        // age: request.body.age,
        // phone: request.body.phone,
        // gender: request.body.gender,
        // userId: request.body.userId,
    })
    .then(game_user => {
        response.status(201)
        response.redirect(request.baseUrl+'/dashboard');
    })
}

//FUNCTION TO UPDATE USER
function updateUserIndex(request, response) {
    response.render('update')
}

//FUNCTION TO DELETE USER
function deleteUser(request, response) {
    game_user.destroy({
        where: { id: request.params.id }
    })
    .then(data => {
        response.send('User berhasil dihapus')
    })
}

//FUNCTION TO ROUTE AND DISPLAY CREATE USER PAGE
function addUserIndex(request, response) {
    response.render('create')
}

//Export Module to route.js
module.exports = {
    playerList,
    addUserIndex,
    addDataUser,
    updateUserIndex,
    deleteUser
}