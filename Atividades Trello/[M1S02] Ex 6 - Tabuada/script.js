/* Desenvolva um gerador de tabuada, capaz de gerar a tabuada de qualquer número inteiro 
entre 1 a 10. O usuário deve informar de qual numero ele deseja ver a tabuada. A saída 
deve ser conforme o exemplo abaixo:
Tabuada de 5:
5 X 1 = 5
5 X 2 = 10
...
5 X 10 = 50 */

let number = document.getElementById('number');
let res = document.getElementById('res');
let displayAnswer;
let text;

button.addEventListener("click", (e) => {

    for (let i = 1; i <= 10; i++) {

        total = number.value * i;

        //cria dinamicamente uma tag HTML para exibir um conteudo
        displayAnswer = document.createElement("p");
        text = document.createTextNode(`${number.value} x ${i} = ${total} `)
        displayAnswer.appendChild(text);
        document.body.insertBefore(displayAnswer, res);
    }

})

