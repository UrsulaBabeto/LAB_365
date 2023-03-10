/* 
Ex 3 - Iniciando um servidor node
Inicie um servidor node local em sua máquina utilizando express.
O resultado esperado é imprimir na tela do navegador uma mensagem da sua escolha.
 */

const express = require('express')
const app = express();

/* app.listen(3333, (() => {
    console.log('servidor online!!')
}))  */


/*
Ex 4 - Rotas com express
Crie uma rota HTTP com express para simular o envio do seu nome como parâmetro da url e imprima em um 
console.log() a mensagem “Rota de API criada pelo(a): {nome}”;
OBS: substitua o {nome} pelo nome que é passado como parâmetro da url.
OBS: utilize a plataforma de API que você preferir. */
app.use(express.json());

app.get('/', ((req, res) => {
    res.status(201)
        .send("Get Funciona")
}))

app.post('/user/:nome', (req, res) => {
    const nome = req.params.nome
    res.status(201)
        .send("Rota de api criada por: " + nome)
    console.log("Rota de api criada por: " + nome)
})


/* 
Ex 5 - Rotas com express
Crie uma rota HTTP com express para simular o envio de um objeto pelo corpo 
 requisição e como resposta retorne esse objeto no formato json padrão.
OBS: utilize a plataforma de API que você preferir. 
*/

app.post('/sendObject', (req, res) => {
    const obj = req.body;

    res.status(200)
        .send("json criado")
    console.log(obj)
})

// JSON BODY: [ {"name":"Ursula","age":34,"active":true},{"name":"Rod","age":36,"active":false} ]



app.listen(3333, (() => {
    console.log('servidor online!!')
}))