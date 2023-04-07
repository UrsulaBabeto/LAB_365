const express = require('express');

const placeValidation = require('../middlewares/place-middleware.js');
const userValidation = require('../middlewares/user-middleware.js');
const tokenValidation = require('../middlewares/token-middleware.js'); 
const sessionValidation = require('../middlewares/session-middleware.js');

const createPLaces = require('../controller/places/createPlaces.js');
const allFindPlaces = require('../controller/places/allFindPlaces.js');
const updatePlaces = require('../controller/places/updatePlaces.js');
const deletePlaces = require('../controller/places/deletePlaces.js');

const sessions = require('../controller/users/loginUsers.js');
const createUser = require('../controller/users/createUser.js');
const findUser = require('../controller/users/findUser.js');

const route = express.Router(); 

//                  PLACE
route.post('/places',placeValidation, tokenValidation,createPLaces);
route.get('/places',tokenValidation,allFindPlaces);
route.put('/places/update/:id',tokenValidation, updatePlaces);
route.delete('/places/delete/:id',tokenValidation,deletePlaces) ;


//                   USER
route.post('/users', userValidation, tokenValidation,createUser);
route.get('/users',tokenValidation, findUser);
route.post('/sessions',sessionValidation, sessions);

module.exports = route;