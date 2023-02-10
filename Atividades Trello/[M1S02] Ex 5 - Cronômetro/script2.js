/* Crie um cronômetro que seja executado por um botão, conte 10 segundos, e no fim 
imprima um texto: 'Seu tempo acabou!! Tente novamente!!'. */

let res = document.getElementById('res')
let timer = 0;
let interval;
const btn = document.querySelector("#button")

btn.addEventListener("click", () => {

    interval = setInterval(botao, 1000);
    
})

function botao(){

    if (timer <=10 ) {
        res.innerHTML = timer
        timer ++
        console.log( timer)
    } else {
        res.innerHTML = 'Seu tempo acabou!! Tente novamente!!'
        clearTimeout(interval)
    }
}