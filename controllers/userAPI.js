// users data is load from users.json file
let users = require('../db/users.json');
//SHOW ALL USERS
function showUser(req, res) {
    res.status(200).json(users);
}

//GET USERS BY ID
function getUserByID(req, res) {
    const data = users.find((item) => {
        return item.id == req.params.id;
    })
    //IF USER BY ID IS NOT FOUND PRINT THIS MESSAGE
    if (!data) {
        res.status(404).json({
            message: 'User not found'
        });
    }

    res.status(200).json(data);
}

//Export Module to route.js
module.exports = {
    showUser,
    getUserByID
}