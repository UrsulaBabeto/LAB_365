/* Ex 6 - Criando uma API (parte 1)
Você foi convocado para criar uma API completa, levando todo o conhecimento aprendido, 
incluindo a arquitetura vista no slide Aula 01 página 09, crie duas rotas HTTP: uma para o 
envio de um novo usuário para o banco de dados, e outra para deletar o usuário.
Apenas crie a conexão do servidor node e as rotas em arquivos separados.
Não será necessária a implementação das funcionalidades; */

const express = require('express');
const router = require('./routes')
const app = express();

app.use(express.json());
app.use(router);



app.listen(3333, (() => {
  console.log('servidor ON!!')
}))

//module.exports = router

/* Ex 7 - Criando uma API (parte 2)
Agora continuando o exercício anterior no módulo de controlador siga as seguintes regras de negócio de cada rota:
Envio de um novo usuário:
O objeto a ser enviado no corpo da requisição para controlador deve seguir o seguinte formato :
{
  "nome":"Fulano",
  "idade":18,
  "cargo":"junior"
  "senha":"12345678"
}
O método HTTP será o post com a rota da sua escolha;
Caso o usuário tenha idade menor que 21 anos não deverá prosseguir com a requisição, então retorne 
o objeto {“mensagem”: “Usuário não possui idade suficiente”};
Caso na requisição não seja enviado nada no seu corpo retorne com status 406 com o objeto {“mensagem”: 
 “Está faltando dados para concluir a operação”};
Caso a operação seja um sucesso, retorne com status 200 o objeto {“mensagem”: “Criado com sucesso”};
Deletar o usuário:
Deverá ser passado na URL da requisição um id;
Verifique na url se o id é passado, caso contrário retorne com status 406 com o objeto {“mensagem”: 
“Está faltando dados para concluir a operação”};
Caso a operação seja um sucesso, retorne com status 200 o objeto {“mensagem”: “Deletado com sucesso”};
OBS: lembre de alterar os dados para que passe em todos os testes e sua API esteja 100%. */


/* Ex 8 - Criando uma API (parte 3)
Agora para deixar nossa aplicação do exercício anterior mais completa, na rota de Envio de
 um novo usuário adicione um middleware que irá capturar o cargo do usuário. Só poderá 
 prosseguir para a seguinte função se o cargo do usuário for igual a string “líder”.
Lembre-se: um middleware é uma função que fica antes da chamada para o controlador 
ou antes da função da rota. */