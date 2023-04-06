const express = require('express');


const ControllerPlaces = require('../controller/controllerPlaces.js');
const ControllerUsers = require('../controller/controllerUsers.js');
const placeValidation = require('../middlewares/place-middleware.js');
const userValidation = require('../middlewares/user-middleware.js');
const fullValidation = require('../middlewares/token-middleware.js'); 

const route = express.Router(); 

//                  PLACE
route.post('/places',placeValidation, ControllerPlaces.create);
route.get('/places',ControllerPlaces.AllFind);
route.put('/places/update/:id', ControllerPlaces.update);
route.delete('/places/delete/:id',ControllerPlaces.deleted) ;
//route.get('/',ControllerPlaces.main);


//                   USER
route.post('/users', userValidation, ControllerUsers.create);
route.get('/users', ControllerUsers.users);
route.post('/sessions',fullValidation, ControllerUsers.sessions);

module.exports = route;