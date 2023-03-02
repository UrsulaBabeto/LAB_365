/* 
O Sr. Manoel Joaquim acaba de adquirir uma panificadora e pretende implantar a 
metodologia da tabelinha, que já é um sucesso na sua loja de 1,99. Você foi 
contratado para desenvolver o programa que monta a tabela de preços de pães, de 
1 até 50 pães, a partir do preço do pão informado pelo usuário, conforme o exemplo 
abaixo:
Preço do pão: R$ 0.18
Panificadora Pão de Ontem - Tabela de preços
1 - R$ 0.18
2 - R$ 0.36
...
50 - R$ 9.00 */

let description = document.querySelector('#description');
let nameDisplay = document.querySelector('#nameDisplay');
let price = document.querySelector('#price');
let showDisplay = document.querySelector('#showDisplay');


function Calcular() {

    nameDisplay.innerHTML = description.value

    for (let i = 1; i <= 50; i++) {
        let total = i * price.value;

        newTotal = total.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        })

        let displayAnswer = document.createElement("p");
        let text = document.createTextNode(`${i} - ${newTotal} `)
        displayAnswer.appendChild(text);
        document.body.insertBefore(displayAnswer, showDisplay);
    }
}