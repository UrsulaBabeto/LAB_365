require("dotenv").config();

const express = require("express");

const connection = require("./src/connection/connection");
const routePatient = require("./src/routes/patient-routes");
const routeNurse = require("./src/routes/nurse-routes");
const routeDoctor = require("./src/routes/doctor-routes");
const routeAppoitment = require("./src/routes/appointment-routes");

const app = express();
app.use(express.json());

app.use(routePatient, routeDoctor, routeNurse, routeAppoitment);

connection.sync({ alter: true });

app.listen(process.env.PORT_URL, () => console.log("server on"));
