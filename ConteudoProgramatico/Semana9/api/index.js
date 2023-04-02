//npm i express
const express = require("express");
const connection = require("./src/database");
const Task = require("./src/model/task");

const app = express();
app.use(express.json()); //obrigatorio

/* connection.authenticate()
console.log('Connection has been established successfully.'); */
connection.sync({alter:true});//atualiza alterações no banco de dados

app.get("/", (req, res) => {
  res.status(200).json({ message: "welcomes" });
});

app.post("/tarefas", async (req, res) => {
  try {
    const tarefa = await {
      name: req.body.name,
      description: req.body.description,
    };

    if (!tarefa.name) {
      return res.status(400).json({ message: "nome obrigatório" });
    }

    //if()return fazer o tratamento se o nome ja existe
    /* const encontreUm = await Task.findOne({ where: { name: tarefa.name } });
    if(encontreUm)  return res.status(400).json({ message: "Ja existe uma tarefa com este nome" }); */ //se o nome é diferente de nulo, tem mais de um nome igual.. retorna o erro

    /*  where: {name: tarefa.name}})
verifyTask instanceof Task; 

if(verifyTask?.name){  let lowerSelect = verifyTask.name */

    Task.create(tarefa);
    /*  console.log(encontreUm) */
    res.status(200).json(tarefa);
  } catch (error) {
    res.status(500).json({ message: "servidor fora do ar" });
  }
});

app.get("/tarefas", async (req, res) => {
  try {
    const tasks = await Task.findAll();
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ message: "servidor fora do ar" });
  }
});

app.delete("/tarefas/:id", async (req, res) => {
  try {
    await Task.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!req.params.id) return res.status(406).json({ message: "ID nao encontrado" });
    res.status(204).json({ message: "Deletado com sucesso" });
  } catch (error) {
    res.status(500).json({ message: "servidor fora do ar" });
  }
});


//NAO É RECOMENDADO ENVIAR "BODY" COM "GET"
//DELETE É SO COM O PARAMS

app.listen(3330, () => console.log("mãe ta on"));

//"" , 0 , null, undefined, = false
