const express = require("express");

const addPatient = require("../controller/patient-controller/add-patient");
const deletePatient = require("../controller/patient-controller/delete-patient");
const updatePatient = require("../controller/patient-controller/update-patient");
const findOnePatient = require("../controller/patient-controller/findOne-patient");
const findAllPatient = require("../controller/patient-controller/findAll-patient");
const statusPatient = require("../controller/patient-controller/status-patient");

const patientSecure = require("../middlewares/patient-middleware");

const route = express.Router();

route.post("/api/pacientes", patientSecure, addPatient);
route.get("/api/pacientes/:id", findOnePatient);
route.get("/api/pacientes", findAllPatient);
route.put("/api/pacientes/:id/status", statusPatient);
route.put("/api/pacientes/:id", patientSecure, updatePatient);
route.delete("/api/pacientes/:id", deletePatient);

module.exports = route;
