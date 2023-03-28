//inserir a senha no db antes de rodar

(async () => {
  const database = require("./db.js");
  const Equipamento = require("./equipamento.js");
  await database.sync(); //verifica os modelos do projeto e tabelas no banco, cria a tabela caso nao exista

  //adicionar itens
  const novoEquipamento = await Equipamento.create({
    nome: "Escada",
    preco: 1320,
    descricao: "Baixo Impacto",
  }); 

  //encotrar
  const equipamentos = await Equipamento.findAll();
  const equipamentosPK = await Equipamento.findByPk(2);
  console.log(equipamentos);
  console.log(equipamentosPK);

  //faz updates no db
  equipamentosPK.descricao = 'Fiz uma alteracao'
  await equipamentosPK.save(); 

  //excluir
  await equipamentosPK.destroy()
})();
