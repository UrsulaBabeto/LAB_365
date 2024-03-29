
require('dotenv').config();
//npm i express
const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const connection = require("./src/database");
const Task = require("./src/model/task");
const User = require("./src/model/user");

const log = require("./src/middlewares/log");
const validateNewUser = require("./src/middlewares/validadeNewUser");
const validateToken = require("./src/middlewares/validate-token");



const app = express();
app.use(express.json()); //obrigatorio
//app.use(log)//cadastra o middleware


/* connection.authenticate()
console.log('Connection has been established successfully.'); */
connection.sync({ alter: true }); //atualiza alterações no banco de dados

app.get("/", (req, res) => {
  res.status(200).json({ message: "welcomes" });
});

app.post("/tarefas",validateToken, async (req, res) => {
  try {
    console.log(req.body)
    const tarefa = await {
      name: req.body.name,
      description: req.body.description,
      user_id:req.body.userId//cadastra uma nova coluna
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
    console.log(error)
    res.status(500).json({ message: "servidor fora do ar" });
  }
});

app.get("/tarefas", validateToken, async (req, res) => {
  try {
    const tasks = await Task.findAll({where:{
      user_id:req.body.userId
    }});
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
    if (!req.params.id)
      return res.status(406).json({ message: "ID nao encontrado" });
    res.status(204).json({ message: "Deletado com sucesso" });
  } catch (error) {
    res.status(500).json({ message: "servidor fora do ar" });
  }
});

app.put("/tarefas/:id", async (req, res) => {
  try {
    // Task.findOne({where: { id: req.params.id }}); a mesma coisaque o findByPk
    const taskInDatabase = await Task.findByPk(req.params.id);
    if (!taskInDatabase) {
      return res.status(404).json({ message: "Tarefa não encontrada" });
    }

    /*     const {name, description}=req.body;
    taskInDatabase.name = name;
    taskInDatabase.description = description;  MESMA SOLUÇÃO ABAIXO*/

    taskInDatabase.name = req.body.name || taskInDatabase.name; //se não vier um nome no parametro,  retorne o valor ja existente
    taskInDatabase.description = req.body.description;
    //se o usuario passar so o um atributo como parametro
    // o sequelize entende que o outro parametro nao sera atualizado DESDE QUE ele não seja NOT NULL

    await taskInDatabase.save(); // update e save podem ser utilizados para esta mesma funçao
    res.json(taskInDatabase);
  } catch (error) {
    return res.status(500).json({ message: "Servidor não encontrado" });
  }
});
//NAO É RECOMENDADO ENVIAR "BODY" COM "GET"
//DELETE É SO COM O PARAMS

//cadastra o middleware para um rota especifica
app.post("/users",validateNewUser, async (req, res) => {
  try {
    /*  const { name, cpf, password } = req.body;

    const newUser = {
      name,
      cpf,
      password,
    }; */

    //valida se ja existe um cpf no body de requisição
    const userInDb = await User.findOne({ where: { cpf: req.body.cpf } });
    if (userInDb)
      return res
        .status(409)
        .json({ message: "ja existe um usuario com este cpf" });

    const hash = await bcrypt.hash(req.body.password, 10); //criptografar senha
    // const hash =  bcrypt.hashSync(req.body.password, 10);//hashSync faz a mesma coisa sem o await

    const newUser = await {
      name: req.body.name,
      cpf: req.body.cpf,
      password: hash,
    };    

       if (!newUser.name) {
      return res.status(400).json({ message: "nome obrigatório" });
    }
    if (!newUser.cpf) {
      return res.status(400).json({ message: "CPF obrigatório" });
    }
    if (!newUser.password) {
      return res.status(400).json({ message: "Senha obrigatória" });
    }

    //nao mostrar a senha no retorno da request/response
    //desestrutura do cadastro no create() a informação que quer e passa so ela no res
      const user = await User.create(newUser);
      const {password, ...rest } = user.toJSON()

    res.status(201).json(rest);
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: "Servidor não encontrado" });
  }
});

app.post("/users/login", async (req, res) => {
  try {
    const userInDb = await User.findOne({
      where: {
        cpf: req.body.cpf,
      },
    });
    if (!userInDb) {
      return res.status(404).json({ message: "cpf incorreto" });
    }

    //compara a senha do banco de dados com a senha passada pela aplicação
    const passwordIsValid = await bcrypt.compare(
      req.body.password,userInDb.password);

    if (!passwordIsValid) {
      return res.status(404).json({ message: "Senha incorreta" });
    }

    const token = jwt.sign(
      {      
      id:userInDb.id    
    },
    process.env.CHAVE_DO_TOKEN,
    {
      expiresIn:"10m",
    })

    res.status(200).json({name:userInDb.name + ", Bem vindo!", token:token});
  } catch (error) {
    return res.status(500).json({ message: "Servidor não encontrado" });
  }
});


app.listen(3330, () => console.log("mãe ta on"));


//"" , 0 , null, undefined, = false

//post cria nova sessão, para login utilizamos post
