const express = require('express');
const appointment = require('../controller/appointment-controller/appointment-controller');

const route = express.Router();

route.put("/api/atendimentos",  appointment);

module.exports = route;