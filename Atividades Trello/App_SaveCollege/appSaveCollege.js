        /* 
        EX.1
        Uma escola precisa armazenar os dados dos alunos e realizar várias operações. 
        Primeiro crie uma lista que guarda 5 objetos chamados aluno, e adicione 5 
        propriedades contendo informações pessoais como “nome, altura, idade, sexo e 
        sala”. Por fim, imprima os alunos no terminal.

        EX.2
        A escola precisa saber a média de nota dos alunos de uma determinada série. 
        Para isso precisamos de sua ajuda. Crie uma propriedade dentro de cada objeto 
        aluno chamado Matemática com um valor fictício e utilize operadores aritméticos 
        para obter a média dos alunos e imprimir no terminal.

        EX.3
        Imprima o name do aluno e o valor aprovado ou reprovado em seguida utilizando operadores
        condicionais. 

        EX.4  Calcular a média e imprimir o nome dos alunos aprovados ou reprovados utilizando 
        Estruturas de repetição

         */

        var students = [{
            name: 'Joao',
            height: 1.65,
            age: 44,
            gender: 'masculino',
            class: 12,
            Math: {
                score: 7
            }
        },
        {
            name: 'Maria',
            height: 1.80,
            age: 24,
            gender: 'feminimo',
            class: 4,
            Math: {
                score: 9
            }
        },
        {
            name: 'José',
            height: 2.15,
            age: 30,
            gender: 'masculino',
            class: 4,
            Math: {
                score: 5
            }
        },
        {
            name: 'Marcia',
            height: 1.55,
            age: 23,
            gender: 'feminino',
            class: 12,
            Math: {
                score: 3
            }
        },
        {
            name: 'Marina',
            height: 1.65,
            age: 50,
            gender: 'feminino',
            class: 12,
            Math: {
                score: 10
            }
        },
    ]

    //EX.1
    console.log(
        `nome: ${students[0].name}; Altura: ${students[1].height}; Sexo: ${students[2].gender}; Sala: ${students[3].class}; Idade: ${students[4].age}`
    );
    console.log("");

    for (const index in students) {

        console.log(
            `nome: ${students[index].name}; Altura: ${students[index].height}; Sexo: ${students[index].gender}; Sala: ${students[index].class}; Idade: ${students[index].age}; Nota: ${students[index].Math.score}`
        );
        console.log("");
    }

    //EX.2
    var adition = 0;

    for (let i = 0; i < students.length; i++) {
        adition += students[i].Math.score;
    }

    var average = adition / students.length;
    console.log(`A media de nota de Matematica dos alunos foi: ${average}`);
    console.log("");

    //EX.3 e 4
    for (const i in students) {
        if (students[i].Math.score >= 7) {
            console.log(`Aluno ${students[i].name}, com nota ${students[i].Math.score}, foi APROVADO! \n\n`)
        } else if (students[i].Math.score <= 4) {
            console.log(`Aluno ${students[i].name}, com nota ${students[i].Math.score}, foi REPROVADO! \n\n`)
        } else {
            console.log(`Aluno ${students[i].name}, com nota ${students[i].Math.score}, esta em RECUPERAÇÃO! \n\n`)
        }
    }

    //OU

    var arrayNota = []
    var soma = 0
    var cont = 0

    while (arrayNota.length < 5) {
       // nome = arrayNome.push(prompt('nome:'))

        arrayNota[cont] = Number(prompt(`nota ${cont}`))
        soma += Number(arrayNota[cont])
        cont++
    }
    var media = (soma / cont)

    console.log(`A media das notas ${arrayNota} é: ${media}`)

