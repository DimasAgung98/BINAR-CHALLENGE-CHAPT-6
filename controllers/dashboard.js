const {
    append
} = require('express/lib/response');
const res = require('express/lib/response');
const {
    game_user,
    game_user_biodata,
    game_user_history
} = require('../models');

//FUNCTION TO ROUTE AND DISPLAY DASHBOARD PAGE
//READ ALL DATA ON DATABASE
function playerList(request, response) {
    game_user.findAll({
            include: game_user_biodata
        })
        .then(usersList => {
            response.render('dashboard', {
                usersList
            })
        });
}

function readOneUser(request, response) {
    game_user.findOne({
            include: game_user_biodata
        }, {
            where: {
                id: request.params.id
            }
        })
        .then(oneData => {
            response.render('show', {
                oneData
            })
        })
}

//FUNCTION TO CREATE NEW USER
function addDataUser(request, response) {
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
        .then(game_user => {
            response.status(201)
            response.redirect(request.baseUrl + '/dashboard');
        })
}

//FUNCTION TO UPDATE USER
function updateUserIndex(request, response) {
    game_user.findOne({
            where: {
                id: request.params.id
            }
        })
        .then(data => {
            response.render('update', {
                data
            })
        })
}

function updateUser(request, response) {
    game_user.update({
            username: request.body.username,
            password: request.body.password,
            email: request.body.email,
        }, {
            where: {
                id: request.params.id
            }
        })
        .then(() => {
            response.redirect(request.baseUrl + '/dashboard');
        })
}

//FUNCTION TO DELETE USER
function deleteUser(request, response) {
    game_user.destroy({
            where: {
                id: request.params.id
            }
        })
        .then(data => {
            response.redirect(request.baseUrl + '/dashboard');
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
    deleteUser,
    updateUser,
    readOneUser
}