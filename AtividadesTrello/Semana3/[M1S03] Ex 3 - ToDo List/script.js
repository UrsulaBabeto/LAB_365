/* Faça uma lista de tarefas diárias (strings), e crie 4 funções diferentes.
01. Função que busca se a tarefa existe na lista.
02. Função que altera um item da lista.
03. Função que deleta um item da lista
04. Função que adiciona um item na lista */

let text = document.querySelector("#text");
let resposta = document.querySelector("#resposta");
let list = document.createElement("li");

let resp;
let arrayTask = [];

function adicionar() {
  arrayTask.push(text.value);
  list.innerText = `Tarefas: \n ${arrayTask}\n`;
  resposta.appendChild(list);
  text.value = "";
}

function buscar() {
  let arrayBusca = arrayTask.filter((p) => {
    return p == text.value;
  });
  if (arrayBusca == text.value) {
    alert(`O item: "${arrayBusca}" ja esta na lista`);
  } else {
    alert("não encontrei o item buscado, tente novamente");
  }
  text.value = "";
}

function alterar() {
  let pergunta = prompt("Digite a tarefa a ser excluida:");
  let pergunta1 = prompt("Digite a tarefa a ser incluida:");

  let index = arrayTask.indexOf(pergunta);
  arrayTask.splice(index, 1, pergunta1);
  list.innerText = `Tarefas:\n ${arrayTask}\n`;
  text.value = "";
}

function deletar() {
  let newList = arrayTask.filter((e) => {
    return e != text.value;
  });
  arrayTask = newList;
  list.innerText = `Tarefas:\n ${arrayTask}\n`;
  text.value = "";
}
