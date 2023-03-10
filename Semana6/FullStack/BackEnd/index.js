const express = require('express');
const app = express();

app.use(express.json());
//imprime as requisiçoes do body (POST/JSON-BODY)


app.get('/', (req, res) => {
    res.send("<h1>requisição funciona</h1>")
})

app.get('/oi', (req, res) => {
    res.send([{ "nome": "tinky winky" }, { "nome": "dipsy" }, { "nome": "lala" }, { "nome": "pow" }])
})
//'/get-user/2/Ursula
app.get('/get-user/:id/:nome', (req, res) => {// :id - paramentro obrigatorio 
    res.send(":id " + req.params.id + " :nome " + req.params.nome);

})

app.post('/create', (req, res) => {//rota, o que vai ser eviando no corpo da requisição, função de callBack
    console.log(req.body)
    res
        .status(201)
        .send({ mensagem: "Usuario criado com sucesso" });
})

app.delete('/deleteUser/:id', (req, res) => {
   
    // let number = Number(req.params.id)
    // if(typeof number !== "number")res.status(415).send('paramentro não é um numero');    
 
    let users = [
            { id: 1, nome: "Tinki winky" },
            { id: 2, nome: "Dipsy" },
            { id: 3, nome: "Lala" },
            { id: 4, nome: "Pow" },
            { id: 5, nome: "é hora de dar tchau" }
        ]
        let searchUser = users.filter((e) => { // filtra item igual ao parametro passado na url
            return e.id == req.params.id
        })

        if (searchUser.length) {//encontrou algum item dps de passar pelo filter
            res
                .status(200)
                .send("Usuario Deletado")
        } else {
            res.status(404)
                .send("Usuario não encontrado")
        }
    
})

app.listen(3333, () => {
    console.log('servidor online!!')
})

/* 
app.put('/update', (req, res) => {
res.send()
})

 */
/* app - {
    use:,
    listen:()=>{},//cria conexao com o node
    route: ()=>{}
} */