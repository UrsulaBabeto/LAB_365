/* Faça uma lista de tarefas diárias (strings), e crie 4 funções diferentes.
01. Função que busca se a tarefa existe na lista.
02. Função que altera um item da lista.
03. Função que deleta um item da lista
04. Função que adiciona um item na lista */

console.log('hello')
let resp;
let arrayTask = [];

while (resp != "5") {
    let paragraph = prompt('Adicionar tarefa: 1 \nBuscar tarefa: 2 \nAlterar tarefa: 3 \nDeletar tarefa: 4 \nSair: 5')

    switch (paragraph) {
        case "1":
            adicionar()
            break;
        case "2":
            buscar()
            break;
        case "3":
            alterar()
            break;
        case "4":
            deletar()
            break;
        default:
            console.log('6')
            break;
    }
}

function adicionar() {
    let pergunta = prompt('Digite a tarefa a ser adicionada:')
    arrayTask.push(pergunta)
    console.log(`Tarefa add: ${arrayTask}`)
}

function buscar() {

    let pergunta = prompt('Digite a tarefa a ser buscada:')
    let arrayBusca = arrayTask.filter((p) => {
        return p == pergunta
    })
    if (arrayBusca == pergunta) {
        console.log(`O item: ${arrayBusca} esta na lista`)
    } else {
        console.log('não encontrei o item buscado, tente novamente')
    }
}

function alterar() {

    let pergunta = prompt('Digite a tarefa a ser excluida:')
    let pergunta1 = prompt('Digite a tarefa a ser incluida:')

    let index = arrayTask.indexOf(pergunta);
    arrayTask.splice(index, 1, pergunta1)
    console.log(`Tarefa add: ${arrayTask}`)
}

function deletar() {
    let pergunta = prompt('Digite a tarefa a ser deletada:')
    let newList = arrayTask.filter((e) => {
        return e != pergunta
    })
    arrayTask = newList
    console.log(`Tarefa add: ${arrayTask}`)
}