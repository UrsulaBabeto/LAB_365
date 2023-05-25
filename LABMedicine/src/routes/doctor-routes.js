const express = require("express");

const addDoctor = require("../controller/doctor-controller/add-doctor");
const updateDoctor = require("../controller/doctor-controller/update-doctor");
const deleteDoctor = require("../controller/doctor-controller/delete-doctor");
const findOneDoctor = require("../controller/doctor-controller/findOne-doctor");
const statusDoctor = require("../controller/doctor-controller/status-doctor");
const findAllDoctors = require("../controller/doctor-controller/findAll-doctor");

const doctorSecure = require("../middlewares/doctor-middleware");

const route = express.Router();

route.post("/api/medicos",doctorSecure , addDoctor);
route.get("/api/medicos/:id", findOneDoctor);
route.get("/api/medicos", findAllDoctors);
route.put("/api/medicos/:id",doctorSecure , updateDoctor);
route.put("/api/medicos/:id/status", statusDoctor);
route.delete("/api/medicos/:id", deleteDoctor);

module.exports = route;
