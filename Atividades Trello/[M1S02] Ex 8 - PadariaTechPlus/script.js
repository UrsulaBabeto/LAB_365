/* 
O Sr. Manoel Joaquim expandiu seus negócios para além dos negócios de 1,99 e agora possui uma loja de conveniências.
Faça um programa que implemente uma caixa registradora rudimentar. O programa deverá receber um número desconhecido
de valores referentes aos preços das mercadorias. Um valor zero deve ser informado pelo operador para indicar o 
final da compra. O programa deve então mostrar o total da compra e perguntar o valor em dinheiro que o cliente 
forneceu, para então calcular e mostrar o valor do troco. Após esta operação, o programa deverá voltar ao ponto
inicial, para registrar a próxima compra. A saída deve ser conforme o exemplo abaixo:
Lojas Tabajara
Produto 1: R$ 2.20
Produto 2: R$ 5.80
Produto 3: R$ 0
Total: R$ 9.00
Dinheiro: R$ 20.00
Troco: R$ 11.00
...
 */


let price = document.querySelector('#price');
let list = document.querySelector('#list');
let totalDisplay = document.querySelector('#totalDisplay');
let showNewTotal = document.querySelector('#showNewTotal');

let total = 0

function add() {

    let newPrice = Number(price.value)
    total += newPrice;

    let displayAnswer = document.createElement("li");
    let text = document.createTextNode(`Produto:  ${newPrice.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} `)
    displayAnswer.appendChild(text);
    displayAnswer.style.fontSize = '12px';
    list.appendChild(displayAnswer);
    
    totalDisplay.innerHTML = `Total: ${total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`
}

calcular.addEventListener('click', () => {

    let money = prompt('Qual o valor para pagamento?')
    let formatedMoney = money.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
    if (money > 0 && money >= total) {
        let change = money - total;
        let formatedChange = change.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
        showNewTotal.innerHTML = `Pagamento  ${formatedMoney} :<br>
                                  Troco:     ${formatedChange}`
    } else {
        showNewTotal.innerHTML = "VALOR INVALIDO!"
    }

}) 
