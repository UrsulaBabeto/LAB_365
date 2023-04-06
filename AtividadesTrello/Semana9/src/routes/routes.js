const express = require('express');


const ControllerPlaces = require('../controller/controllerPlaces.js');
const ControllerUsers = require('../controller/controllerUsers.js');
const placeValidation = require('../middlewares/place-middleware.js');
const userValidation = require('../middlewares/user-middleware.js');
const tokenValidation = require('../middlewares/token-middleware.js'); 
const sessionValidation = require('../middlewares/session-middleware.js');

const route = express.Router(); 

//                  PLACE
route.post('/places',placeValidation, tokenValidation,ControllerPlaces.create);
route.get('/places',tokenValidation,ControllerPlaces.AllFind);
route.put('/places/update/:id',tokenValidation, ControllerPlaces.update);
route.delete('/places/delete/:id',tokenValidation,ControllerPlaces.deleted) ;

//route.get('/',ControllerPlaces.main);


//                   USER
route.post('/users', userValidation, tokenValidation,ControllerUsers.create);
route.get('/users',tokenValidation, ControllerUsers.users);
route.post('/sessions',sessionValidation, ControllerUsers.sessions);

module.exports = route;