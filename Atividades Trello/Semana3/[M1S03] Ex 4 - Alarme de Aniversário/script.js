/* Use uma sintaxe que chama uma função em intervalos de tempo definidos e faça ela verificar se 
chegou uma data, se essa data chegou, ela deve imprimir feliz aniversário. Se não chegou, ela 
deve dizer quantos dias faltam para chegar a data.
Para facilitar o cálculo de dias, pode se basear no algorítimo abaixo.
const d1 = '2021-10-05';
const d2 = '2021-11-12';
const diffInMs = new Date(d2) - new Date(d1)
const diffInDays = diffInMs / (1000 60 60 * 24);
console.log(diffInDays) // 38 */

let resp = document.querySelector('#resposta')
let resp1 = document.querySelector('#resposta1')
let interval;

const current = '2023/02/15'
const data = '2023/02/15'

const diffInMs = new Date(data) - new Date(current)
const diffInDays = diffInMs / (1000 * 60 * 60 * 24)

function iniciar(){
    if (data) {
        resp.innerHtml = "FELIZ ANIVERSARIO"
        clearTimeout(interval)
    } else {
        resp1.innerHtml =`Faltam ${diffInDays} dias para oseu aniversário`
    }
    interval = setInterval(iniciar, 1000);
}
console.log(interval)