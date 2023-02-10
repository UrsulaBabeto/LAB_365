const student = {
    name: "Tales",
    age: 22,
    money: 500000,
}
console.log(student)

const stringJson = JSON.stringify(student)
console.log(stringJson)
console.log(typeof stringJson)

const newStudent = JSON.parse(stringJson)
console.log(newStudent)
console.log(typeof newStudent)


let name = document.getElementById('name')
async function buscaDados() {
    fetch('https://pokeapi.co/api/v2/pokemon/ditto')
        .then((response) => {
            return response.json();
        })
        
        .then((body) => {
            console.log(body)
            name.innerHTML = body.name;
            return body;
        })
}

localStorage.setItem('name','Ursula')//seta informações
localStorage.setItem('name1',stringJson)//seta informações
const dado = localStorage.getItem('name')//busca informação
localStorage.removeItem('name')// apaga o valor da chave
localStorage.clear()// apaga todos os dados armazenados no lacalStorage