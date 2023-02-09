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
let total = 0;

button.addEventListener("click", (e) => {
    for (let i = 1; i < 50; i++) {
        total = number.value * i;   

        const newDiv = document.createElement("p");
        const newContent = document.createTextNode(`${number.value} x ${i+1} = ${total} `)
        newDiv.appendChild(newContent);
        document.body.insertBefore(newDiv, res);

     }
       
        
      
 
})