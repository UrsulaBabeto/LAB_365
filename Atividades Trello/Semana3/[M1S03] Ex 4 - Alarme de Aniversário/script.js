/* Use uma sintaxe que chama uma função em intervalos de tempo definidos e faça ela verificar se 
chegou uma data, se essa data chegou, ela deve imprimir feliz aniversário. Se não chegou, ela 
deve dizer quantos dias faltam para chegar a data.
Para facilitar o cálculo de dias, pode se basear no algorítimo abaixo.
const d1 = '2021-10-05';
const d2 = '2021-11-12';
const diffInMs = new Date(d2) - new Date(d1)
const diffInDays = diffInMs / (1000 60 60 * 24);
console.log(diffInDays) // 38 */

let resposta = document.querySelector('#resposta');
let resposta1 = document.querySelector('#resposta1');


const currentData = '2023/02/15';
const birthday = '2023/03/15';

const diffInMs = new Date(birthday) - new Date(currentData);
const diffInDays = diffInMs / (1000 * 60 * 60 * 24);

let interval = setInterval(iniciar, 10000);//para um dia sera 86400
function iniciar() {

    
    let component = document.createElement("p")

    if (diffInMs == 0) {
        component.innerText = ("FELIZ ANIVERSARIO")
        resposta.appendChild(component)  
        setTimeout( interval)   
    } else {
        component.innerText =(`Faltam ${diffInDays} dias para o seu aniversário`)
        resposta1.appendChild(component)      
    }   
}

    
