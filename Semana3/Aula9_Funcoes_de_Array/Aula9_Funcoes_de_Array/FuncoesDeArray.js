let copa2026 = ['brasil', 'franca', 'alemanha', 'italia', 'espanha']
copa2026.push('argentina')
copa2026.unshift('campeche')
//copa2026.splice(3,0,'Equador')
copa2026.splice(3, 1, 'equador')
copa2026.pop()

//cria item html pelo JS
let list = document.querySelector('#list')
copa2026.forEach((time) => {
    let li = document.createElement("li")
    li.innerText = time
    list.appendChild(li)

})

//.map()
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const dobro = numeros.map((numero) => {
    return numero * 2
})
console.log(dobro)

//.filter()
let numeros1 = [3, 2, 44, 55, 1]
let numerosMenorQueDez = numeros1.filter((numeros) => {
    return numeros < 10
})

let aprovados = ['wallis', 'tales', 'willian', 'glauton']
let verdadeirosAprovador = aprovados.filter((aluno) => {
    return aluno !== 'wallis'
})

//.every()
const numeros2 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(numeros2.every((num) = num < 40))//arrowfunction com retorno explicito pq nao usa chaves

//.reduce()

 const carteiras = [20.64, 43.76, 13.88, 33.54, 98.01]
const carteiraTotal = carteiras.reduce((acc, valor) => {
    return acc += valor
}) 

const carteiras1 = [20.64, 43.76, 13.88, 33.54, 98.01]
const carteiraTotal1 = carteiras.reduce((acc, valor, indice, array) => {
    acc += valor
     console.log(acc)
    if (indice === array.length - 1) {
       return acc / array.length
    } else {
    return acc
    }
})
console.log(carteiraTotal1)