//IMPORT ROUTER EXPRESS
const express = require('express');
const router = express.Router();

//CONTROLLER
const indexController = require('./index'); 
const gameController = require('./game');
const loginController = require('./login');
const registerController = require('./register');
const userAPIController = require('./userAPI');
const dashboardController = require('./dashboard');

// ROUTE
router.get('/', indexController.index);
router.get('/game', gameController.index);
router.get('/register', registerController.registerIndex);


router.get('/login', loginController.loginUser);
router.post('/login', loginController.loginForUser);
router.get('/admin', loginController.loginAdminIndex);
router.post('/admin', loginController.loginAdmin);
router.get('/register', registerController.getAPI);
router.post('/register', registerController.registerData);
router.get('/dashboard', dashboardController.playerList);
router.get('/dashboard/create', dashboardController.addUserIndex);
router.get('/dashboard/update/:id', dashboardController.updateUserIndex);
router.get('/dashboard/show/:id', dashboardController.readOneUser);
router.get('/dashboard/delete/:id', dashboardController.deleteUser);

//CRUD DATABASE
router.post('/dashboard/create', dashboardController.addDataUser);
router.post('/dashboard/update/:id', dashboardController.updateUser);

//USERS MANAGEMENT
router.get('/users', userAPIController.showUser);
router.get('/users/:id', userAPIController.getUserByID);

//EXPORT MODULE ROUTER
module.exports = router;