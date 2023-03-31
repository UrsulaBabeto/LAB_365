//npm i express
const express = require("express");
const connection = require("./src/database");
const Task = require("./src/model/task");

const app = express();
app.use(express.json()); //obrigatorio

/* connection.authenticate()
console.log('Connection has been established successfully.'); */
connection.sync();

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
      return res.status(400).json({ message: "usuario obrigatório" });
    }

    if (tarefa.body.name > 1) {
      return res.status(400).json({ message: "usuario ja existente" });
    }
    //if()return fazer o tratamento se o nome ja existe

    Task.create(tarefa);
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
//NAO É RECOMENDADO ENVIAR "BODY" COM "GET"

app.listen(3330, () => console.log("mãe ta on"));

//"" , 0 , null, undefined, = false
