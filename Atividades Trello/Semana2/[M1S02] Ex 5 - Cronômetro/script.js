/* Crie um cronômetro que seja executado por um botão, conte 10 segundos, e no fim 
imprima um texto: 'Seu tempo acabou!! Tente novamente!!'. */

let res = document.getElementById('res')
let timer = 0;
let interval;


function iniciar() {
    if (timer <=10 ) {
        res.innerHTML = timer++ 
    } else {
        res.innerHTML = 'Seu tempo acabou!! Tente novamente!!'
        clearTimeout(interval)
        timer=0
    }
}

function button(){
 interval = setInterval(iniciar, 1000);
}