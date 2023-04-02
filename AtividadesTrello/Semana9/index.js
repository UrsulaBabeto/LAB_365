const express = require('express');

const connection = require('./src/connection/db.js');
const Controller = require('./src/controller/controller.js')
const place = require('./src/model/place.js')

const app = express();
app.use(express.json());

connection.sync();

app.get('/',Controller.main)
//criar
app.post('/places', Controller.create)
//pesquisar
app.get('/places',Controller.AllFind)
//atualizar
app.put('/places/update/:id', Controller.update)
//deletar
app.delete('/places/delete/:id',Controller.deleted) 

app.listen(3333,()=>console.log('Server On'));

/* {
    "name": "Nome do Local",
    "telefone": "(00) 0000-0000",
    "opening hours": "Segunda a Sexta: 9h às 18h",
    "description": "Descrição do Local",
    "latitude": 235505,
    "longitude": 466333
    } */