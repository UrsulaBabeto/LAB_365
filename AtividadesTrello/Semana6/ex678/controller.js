const add = (req, res) => {
  const id = req.params;

  if (!id.id) {
   return res
      .status(406)
      .json({ mensagem: "Está faltando dados para concluir a operação" });
  } 
  return res.status(200).json("Usuario criado");
};

const addUser = (req, res) => {
  const user = req.body;

  if (!user.nome ||!user.idade ||!user.cargo || !user.id || !user.senha) {
   return res
      .status(406)
      .json({ messagem: "Está faltando dados para concluir a operação" });
  }
  if (user.idade < 21) {
   return res.status(406).json({ messagem: "Usuário não possui idade suficiente" });
  } 
   return res.status(200).json({ mensagem: "Usuario criado com sucesso" });
};

const deleteUser = (req, res) => {
  const idParams = req.params;
  const idUser = req.body;
  
  if (!idParams.id) {
    res.status(406).json({ mensagem: "Está faltando dados para concluir a operação" });
    return;
  }

   let user = idUser.filter(e => e.id === idParams.id);
  if (user) {
   return res.status(200).json({ mensagem: "Deletado com sucesso" });
  } 
 };

module.exports = {
  add,
  addUser,
  deleteUser,
};
