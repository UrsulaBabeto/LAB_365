const yup = require("yup");

const validation = yup.object().shape({
  name: yup
    .string("O nome edve ser uma string")
    .required("O nome é obrigatório"),
  password: yup
  .string().min(8,"A senha precisa ter no minimo 8 caracteres")
  .required("Senha obrigatoria"),
});

function validateNewUser(req, res, next) {
  console.log("dado original", req.body);
  try {
    validation.validateSync(req.body);//valida
    next(); //libera a conexão com os metodos
  } catch (error) {
    response.status(400).json({ message: error.message });
  }
}

module.exports = validateNewUser;

/* app.post("/tarefas",validateNewUser, async (req, res) => {
        try {
          const tarefa = await {
            name: req.body.name,
            description: req.body.description,
          };
           ... */
//cadastra o middleware para um rota especifica

//auth- bearer token