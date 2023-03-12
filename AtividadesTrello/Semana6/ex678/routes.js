const express = require('express');
const controller = require('./controller')

const route = express.Router(); 

route.post('/newUser/:id', controller.add);
route.post('/newUser/', controller.addUser);
route.delete('/deleteUser/:name', controller.deleted);

module.exports = route;

