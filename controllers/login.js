// INITIATE USER.JSON
users = require('../db/users.json');

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
//Export Module to route.js
module.exports = {
    get,
    getById,
    loginIndex,
    login
}