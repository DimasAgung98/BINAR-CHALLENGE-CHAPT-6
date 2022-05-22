// INITIATE USER.JSON
const admin = require('../db/users.json');
const { game_user } = require('../models');
const { use } = require('./route');

// //LOGGER STATUS
// function get(req, res) {
//     res.status(200).json(users);
// }

//ROUTE TO LOGIN PAGE USER
function loginUser(req, res) {
    res.render('loginuser');
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

//ROUTE TO LOGIN ADMIN PAGE
function loginAdminIndex(req, res) {
    res.render('login');
}

//LOGIN ADMIN FUNCTION
function loginAdmin(req, res) {
    const admUsername = req.body.username; //get body of username
    const admPassword = req.body.password; //get body of password

    //MENCOCOKAN EMAIL YANG DI INPUTKAN DENGAN DATABASE
    const adminData = admin.findIndex(adminInput => adminInput.username === admUsername);
    //KETIKA EMAIL TIDAK SESUAI DENGAN EMAIL YANG ADA DI DATABASE
    if (adminData == -1) {
        res.status(403).json({
            message: 'Username is not registered'
        });
    //KETIKA PASSWORD TIDAK SESUAI DENGAN PASSWORD YANG ADA DI DATABASE
    } else {
        if (admin[adminData].password != admPassword) {
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
    loginAdminIndex,
    loginAdmin,
    loginUser,
    loginForUser
}