const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const connection = require("./src/connection/db.js");
const  router  = require("./src/routes/routes.js");

const Place = require("./src/model/place.js");
const User = require("./src/model/users.js");

const app = express();
app.use(express.json());
app.use(router);
connection.sync();

app.listen(3333, () => console.log("Server On"));

/* {
    "name": "Nome do Local",
    "telefone": "(00) 0000-0000",
    "opening hours": "Segunda a Sexta: 9h às 18h",
    "description": "Descrição do Local",
    "latitude": 235505,
    "longitude": 466333
    }
    {
        "fullName":"Batatinha Frita da Silva",
        "email":"batatinhaSilva@frita.com",
        "username":"BatataFrita",
        "password":"comguarana"
    }
    
    */
