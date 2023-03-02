/*  EXERCICIO 1
let array = ['pedro', 'jose', 'aderbal', 'danilo', 'luisa', 'vitoria']
 console.log(array)
if (!array.length) {
    alert('erro, posição inexistente')
} else {    
    array.splice(0,1,'danilo')
    array.splice(3,1,'pedro')
    
    
    console.log(array)
}

function trocarPosicao(inicial, final) {

    let array = ['pedro', 'jose', 'aderbal', 'danilo', 'luisa', 'vitoria']
    let novaLista = []

    if (inicial < 0 || final < 0) {
        return console.log('valor invalido')
    }
    if (inicial >= lista.length || final >= lista.length) {
        return console.log('valores invalidos')
    }
    if (typeof inicial !== 'number' || typeof final !== "number") {
        return console.log('tipos não permitidos')
    }
    for (let i = 0; i < array.length; i++) {
        console.log(lista[i])
        if (i === inicial) {
            novaLista.push(lista[final])
            continue
        }
        if (i === final) {
            novaLista.push(lista[inicial])
            continue
        }
        novaLista.push(lista[index])
    }
}
trocarPosicao(0, 2)

const novaLista = lista.map((_, index) => {
    if (index === inicial) return lista[final]
    if (index === final) return lista[inicial]
    return lista[index]
})


    EXERCICIO 2
*/
/* 
let nome = prompt('nome buscado:')

/* array.filter((e)=>{
    if (nome === e) return console.log(e);
    if(nome !== e) return console.log(e)
    if(!includes(e)) return console.log('nome nao consta na lista')
})   

} */

function procurarUsuario(nome) {
    let array = ['pedro', 'jose', 'aderbal', 'danilo', 'luisa', 'vitoria']
   if(!array.includes(nome)){
    return console.log('nome nao consta na lista')
   }
   
    const restoDaLista = array.filter((nomeLista) => nomeLista != nome)
    console.log(nome, restoDaLista)
}

procurarUsuario('pedro')