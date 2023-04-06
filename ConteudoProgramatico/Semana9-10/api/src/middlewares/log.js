//------------middleware goblal
// é uma função que fica entre a porta e a aplicação

function log(req, res, next) {
console.log("passei por aqui")
console.log("Metodo", req.method)
console.log("URL", req.path)
console.log("Body", req.body)
console.log("Params", req.params)
next()//libera a conexão com os metodos 
}

module.exports = log;

//na pagina index import e utiliza app.use(log)

//middleware local - especifico para uma unica rota
