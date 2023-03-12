/* Deverá ser passado na URL da requisição um id;
Verifique na url se o id é passado, caso contrário retorne com status 406 com o objeto {“mensagem”: 
“Está faltando dados para concluir a operação”};
 */
const add = (req, res) => {
  const id = req.params.id;
  if (!id) {
    res
      .status(406)
      .json({ mensagem: "Está faltando dados para concluir a operação" });
  } else {
    res.status(200).send("Usuario criado");
  }
};

/* Caso o usuário tenha idade menor que 21 anos não deverá prosseguir com a requisição, então retorne 
o objeto {“mensagem”: “Usuário não possui idade suficiente”};
Caso na requisição não seja enviado nada no seu corpo retorne com status 406 com o objeto {“mensagem”: 
 “Está faltando dados para concluir a operação”};
Caso a operação seja um sucesso, retorne com status 200 o objeto {“mensagem”: “Criado com sucesso”};
 */
const addUser = (req, res) => {
  const user = req.body;
  if (user.idade < 21) {
    res.status(406).json({ messagem: "Usuário não possui idade suficiente" });
  }
  if (!user.length) {
    res
      .status(406)
      .json({ messagem: "Está faltando dados para concluir a operação" });
  } else {
    res.status(200).json({ mensagem: "Usuario criado com sucesso" });
  }
};

/* Deletar o usuário:
Caso a operação seja um sucesso, retorne com status 200 o objeto {“mensagem”: “Deletado com sucesso”}; */
const deleted = (req, res) => {
  const name = req.params.name;
  let user = name.filter((e) => {
    return e.name === name;
  });
  if (user.length > 0) {
    res.status(200).json({ mensagem: "Deletado com sucesso" });
  } else {
    res.status(404).send({ mensagem: "Usuario não encontrado" });
  }
};

module.exports = {
  add,
  addUser,
  deleted,
};
