/*  Utilizando a lista: ['Pedro', ‘José', ‘Aderbal', ‘Danilo', 'Luisa', 'Vitoria']
Através de lógica de programação, adicione um ou mais nomes na lista, porém não é possível receber um nome igual.
Regra 1: É necessário enviar um ou mais nomes;
Regra 2: Caso um ou mais nomes já exista na lista retorne uma mensagem de erro;
Regra 3: Se entre os nomes enviados, receber um valor diferente de uma string, retornar uma mensagem de erro;
Regra 4: Caso se enquadre, nas primeiras 3 regras, retornar um log da nova lista com os nomes adicionados junto aos anteriores
*/

function includeName(name) {
    const array = ['Pedro', 'José', 'Aderbal', 'Danilo', 'Luisa', 'Vitoria']


     if (typeof name !== 'string') {
        console.error('palavra nao reconhecida, tente novamente')
        return
    }  
     array.filter((e) => { e.includes(name) ? "nome ja existente" : array.push(name) }
    );
    console.log(array)
}
    includeName("Pedro");
     includeName("joao");
   /*  includeName("paula");
     includeName("carol");
 */

