//define valores default para os parametros
function soma(n1,n2,n3=2){
    return n1+n2+n3}
    console.log(5,5) //retorna 12 (2 é o valor default de n3)

// ...rest extrai dados de array
const[n1,n2,n3,...rest]=[1,2,3,4,5,6] //n1=1; n2=2; n3=3;...rest=4,5,6
const {[3]:numero} = [1,2,3,4,5]; //busca item no meio do array

//...spread copia dados do array. É possivel juntar os dados da copia com novos dados inseridos e juntar a copia
//de dois ou mais arrays
var num=[1,2,3]
var copia = [...num,7,8,9]

//----------------------------------------------------------------------------
const pioresAlunos = ['tales','gabriel','ursula','fernanda']
const alunosMaisOuMenos = ['reinaldo','andrei']
const melhoreAlunos = [...pioresAlunos,...alunosMaisOuMenos,'glauton','karine']
console.log(melhoreAlunos)

//----------------------------------------------------------------------------
const identidade = {
    nome:'Rodolfo',
    rg:6565656
}
const contaBancaria = {
    agencia:'12',
    conta:'1233'
}

const dadosAgrupados = {
    ...identidade,
    ...contaBancaria
}
console.log(dadosAgrupados)

//Sitaxe curta de objetos- quando o nome da variavel é o mesmo nome da propriedade de um 
//objeto não é necessario adicionar o atributo:variavel
var nome = 'thais';
dados = {
	nome,
}

//sets- filtra valores  repetidos e mantem valores unicos
//metodos:add, has, clear,delete, new Set

const numeros = [1,2,3,4,4,5,5,5,6,6,66,7,8,9,9,9,]
let conjunto = new Set(numeros)
conjunto.add()
conjunto.delete(1)
conjunto.has(4)
conjunto.clear()
console.log(conjunto)
console.log(1,2,3,4,5,6,7,8,9)