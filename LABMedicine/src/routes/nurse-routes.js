const express = require("express");

const addNurse = require("../controller/nurse-controller/add-nurse");
const updateNurse = require("../controller/nurse-controller/update-nurse");
const deleteNurse = require("../controller/nurse-controller/delete-nurse");
const findOneNurse = require("../controller/nurse-controller/findOne-nurse");
const findAllNurse = require("../controller/nurse-controller/findAll-nurse");

const nurseSecure = require("../middlewares/nurse-middleware");

const route = express.Router();

route.post("/api/enfermeiros", nurseSecure, addNurse);
route.get("/api/enfermeiros/:id", findOneNurse);
route.get("/api/enfermeiros", findAllNurse);
route.put("/api/enfermeiros/:id", nurseSecure, updateNurse);
route.delete("/api/enfermeiros", deleteNurse);

module.exports = route;
