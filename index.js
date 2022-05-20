//----------INITIATE----------//

//IMPORT MODULE EXPRESS
const express = require('express');
//IMPORT MODULE MORGAN
const morgan = require('morgan');
//IMPORT ROUTE
const route = require('./controllers/route');
const middleware = require('./utils/middleware');
//INISIASI MODULE EXPRESS
const app = express();
//LOCALHOST PORT
const PORT = 8000;
//DECLARE EJS VIEW ENGINE
app.set('view engine', 'ejs');

//----------MIDDLEWARE, CONTROLLER, ROUTE----------//

//PUBLIC FOLDER CONTAIN CONTENT FILE
app.use('/public',express.static('public'));
//MORGAN MODULE LOGGER
app.use(morgan('dev'));
//BUILT-IN MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({extended: false}));
//IMPLEMENTATION OF THE ROUTE INTO THE APPLICATION
app.use(route);
app.use(middleware);

//RUNNING EXPRESS SERVER USING PORT 8000
app.listen(PORT, () => {
  console.log(`Server is Runnning On Port ${PORT}`);
})

