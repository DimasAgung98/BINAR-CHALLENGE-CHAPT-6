//FUNCTION TO ROUTE AND DISPLAY GAME PAGE
function index(request, response) {
    response.render('game');
}
//Export Module to route.js
module.exports = {
    index
}