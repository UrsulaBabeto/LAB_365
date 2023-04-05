const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const connection = require('./src/connection/db.js');
const ControllerPlaces = require('./src/controller/controllerPlaces.js');
const ControllerUsers = require('./src/controller/controllerUsers.js');
const Place = require('./src/model/place.js');
const User = require('./src/model/users.js');


const app = express();
app.use(express.json());

connection.sync();

app.get('/',ControllerPlaces.main);
//criar PLACE
app.post('/places', ControllerPlaces.create);
//pesquisar PLACE
app.get('/places',ControllerPlaces.AllFind);
//atualizar PLACE
app.put('/places/update/:id', ControllerPlaces.update);
//deletar PLACE
app.delete('/places/delete/:id',ControllerPlaces.deleted) ;

//----------------------------------
//cria USER
app.post('/users', ControllerUsers.create);
app.get('/users', ControllerUsers.users);
//login USER
app.post('/sessions',ControllerUsers.sessions);

app.listen(3333,()=>console.log('Server On'));

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