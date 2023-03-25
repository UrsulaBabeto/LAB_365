const express = require('express');
const { criarPasta, criarArquivo } = require('./utils')

const app = express();
app.use(express.json())

app.get('/', (req, response) => {
    response.send('Hello World')
})
app.get('/rotas', (req, response) => {
    response.send('Hello Sussu')
})
app.post('/', (req, response) => {
    const { nome } = req.body
    if (!nome) {
        return response
            .status(400)
            .json({ "erro": "Campo nome é obrigatório" })
    }
    const existePasta = criarPasta(nome)

    if (existePasta) {
        return response
            .status(400)
            .json({ "erro": "Ja existe uma pasta com este nome" })
    }
    response.send('criei a pasta')
})

/* thunder post http://localhost:3333 JSON body 
    {
        "nome":"nova pasta4"
      } */


app.post('/criarArquivo', (req, response) => {
    const { caminhoRelativo, nomeArquivo, dados } = req.body;
    const existeArquivo = criarArquivo(caminhoRelativo, nomeArquivo, dados)
    response.send('criou arquivo')
})

/* thunder post http://localhost:3333 JSON body {
  "caminhoRelativo":"src/",
  "nomeArquivo":"dados.json",
  "dados":{
    "nome":"Ursula",
    "idade":34
  }
} */

app.listen(3333)


/* app.get('/listagem/:nome', (req, response) => {
    const { nome}= requisicao.params//path é obrigatorio
    const {idade}= requisicao.query //é opcional, o back pega se quiser ou nao
}) */
//:nome representa uma variavel PATH PARAMS... OBRIGATORIO
//post cria dados
//path atualização de dados
// delete
//body
//query
/* 
const express = require('express')
const { criarPasta } = require('./utils')

const application = express()
application.use(express.json())

application.get('/listagem/:nome/:idade', (requisicao, resposta) => {
  //path, query
  const { nome, idade } = requisicao.params
  const { telefone } = requisicao.query
  console.log(nome, idade, telefone)
  resposta.status(400).json({"nome": nome})
})

application.get('/rotadopedro', (requisicao, resposta) => {
  resposta.send("Hello World")
})

application.get('/', (requisicao, resposta) => {
  resposta.send("Hello Pedro")
})

application.post('/', (requisicao, resposta) => {
  criarPasta('pedro')
})

application.listen(3333)

app.post('/', (req, response) => {
    const existePasta =criarPasta('sussu')
    if(existePasta){
        return response.json({"erro":"Ja existe uma pasta com este nome"})
    }
response.send('criei a pasta')
})

*/
