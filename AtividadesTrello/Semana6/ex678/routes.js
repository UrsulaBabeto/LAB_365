const express = require('express');

const controller = require('./controller');
const mw = require('./middleware')

const route = express.Router(); 

route.post('/add', controller.add);
route.post('/addUser', mw.verify, controller.addUser);
//route.post('/verify', mw.verify);
route.delete('/deleteUser/:id', controller.deleteUser);

module.exports = route;

