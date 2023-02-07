var alunos = [{
    nome: 'Joao',
    altura: 1.65,
    idade: 44,
    sexo: 'masculino',
    sala: 12
},
{
    nome: 'Maria',
    altura: 1.80,
    idade: 24,
    sexo: 'feminimo',
    sala: 4
},
{
    nome: 'José',
    altura: 2.15,
    idade: 30,
    sexo: 'masculino',
    sala: 4
},
{
    nome: 'Marcia',
    altura: 1.55,
    idade: 23,
    sexo: 'feminino',
    sala: 12
},
{
    nome: 'Marina',
    altura: 1.65,
    idade: 50,
    sexo: 'feminino',
    sala: 12
},
]

/*  for (let index = 0; index < alunos.length; index++) {

 console.log(
     `Nome: ${alunos[index].nome}; Altura: ${alunos[index].altura}; Sexo: ${alunos[index].sexo}; Sala: ${alunos[index].sala}; Idade: ${alunos[index].idade}`
     );
}
console.log(alunos);
console.log(`Nome: ${alunos[0].nome}`);
console.log(`Altura: ${alunos[1].altura}`);
console.log(`Sexo: ${alunos[2].sexo}`);
console.log(`Sala: ${alunos[3].sala}`);
console.log(`Idade: ${alunos[4].idade}`); */

for (const index in alunos) {

console.log(
    `Nome: ${alunos[index].nome}; Altura: ${alunos[index].altura}; Sexo: ${alunos[index].sexo}; Sala: ${alunos[index].sala}; Idade: ${alunos[index].idade}`
);
}
