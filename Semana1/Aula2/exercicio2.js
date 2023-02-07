/* A escola precisa saber a média de nota dos alunos de uma determinada série. 
        Para isso precisamos de sua ajuda. Crie uma propriedade dentro de cada objeto 
        aluno chamado Matemática com um valor fictício e utilize operadores aritméticos 
        para obter a média dos alunos e imprimir no terminal.
         */

        var alunos = [{
            nome: 'Joao',
            altura: 1.65,
            idade: 44,
            sexo: 'masculino',
            sala: 12,
            Matematica: {
                nota: 7
            }
        },
        {
            nome: 'Maria',
            altura: 1.80,
            idade: 24,
            sexo: 'feminimo',
            sala: 4,
            Matematica: {
                nota: 9
            }
        },
        {
            nome: 'José',
            altura: 2.15,
            idade: 30,
            sexo: 'masculino',
            sala: 4,
            Matematica: {
                nota: 5
            }
        },
        {
            nome: 'Marcia',
            altura: 1.55,
            idade: 23,
            sexo: 'feminino',
            sala: 12,
            Matematica: {
                nota: 3
            }
        },
        {
            nome: 'Marina',
            altura: 1.65,
            idade: 50,
            sexo: 'feminino',
            sala: 12,
            Matematica: {
                nota: 10
            }
        },
    ]


    var soma = 0;

    for (let i = 0; i < alunos.length; i++) {
        soma += alunos[i].Matematica.nota;
    }

    var media = soma / alunos.length;
    console.log(`A media de nota de Matematica dos alunos foi: ${media}`);
