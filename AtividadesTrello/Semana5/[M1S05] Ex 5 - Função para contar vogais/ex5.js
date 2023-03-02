/* Criar um algoritmo que conte o total de vogais baseado na string que foi enviada.

Regra 1: Caso não seja uma string, retorne uma mensagem de erro.
Regra 2: Caso identifique pelo menos 1 vogal, retorne o número exato.
Regra 3: Caso na palavra, não conste nenhuma vogal, retorne uma mensagem informe que não tem nenhuma vogal */

function vowels(words) {

    const word = words.toLowerCase()
    const vowels = 'aeiou'
    let count = 0;
    if (typeof word !== 'string') {
        console.error('palavra nao reconhecida, tente novamente')
        return
    }
    for (let i = 0; i < word.length; i++) {
        if (vowels.includes(word[i])) {
            count++
        }
    }
    console.log(`A palavra pesquisada é ${word}, o total de vogal na palavra é: ${count}`)}

vowels("abracadabra") 