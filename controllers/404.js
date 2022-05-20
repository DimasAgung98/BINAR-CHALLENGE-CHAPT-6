//FUNCTION TO ROUTE AND DISPLAY 404 PAGE
function index(request, response) {
    response.status(404);
    response.render('404');
}
//Export Module to route.js
module.exports = {
    index
}