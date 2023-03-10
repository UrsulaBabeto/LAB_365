/*  Utilizando a lista: ['Pedro', ‘José', ‘Aderbal', ‘Danilo', 'Luisa', 'Vitoria']
Através de lógica de programação, adicione um ou mais nomes na lista, porém não é possível receber um nome igual.
Regra 1: É necessário enviar um ou mais nomes;
Regra 2: Caso um ou mais nomes já exista na lista retorne uma mensagem de erro;
Regra 3: Se entre os nomes enviados, receber um valor diferente de uma string, retornar uma mensagem de erro;
Regra 4: Caso se enquadre, nas primeiras 3 regras, retornar um log da nova lista com os nomes adicionados junto aos anteriores
*/

const list = ['Pedro', 'José', 'Aderbal', 'Danilo', 'Luisa', 'Vitoria'];

function includeName(...names) {

    for (const name of names) {
        if (typeof name !== 'string') return console.error('Valor inválido');
        if (list.includes(name)) return console.warn("O nome " + name + " já existe na lista");
        list.push(name);
    }
    console.log(list)
}

includeName('Maria', 'joao', 'carlos');
includeName('Pedro');
includeName(1234);
