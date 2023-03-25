//utils serve funçoes auxiliares para toda a função

const sistemaDeArquivos = require('fs')// fs(fileSystem) permite a manipulacao de qlqr tipo de arquivo no projeto



function criarPasta(nomeDaPasta) {
    console.log(nomeDaPasta)
    if (sistemaDeArquivos.existsSync(nomeDaPasta)) {
        return true//verifica se em algum lugar existe um arquivo com o nome da variavel
    }
    sistemaDeArquivos.mkdirSync(nomeDaPasta)//cria apasta e retorna false para nao criar outra pasta com o mesmo nome
    return false
}
function criarArquivo(caminhoRelativo, nomeArquivo, dados) {
    /* if (sistemaDeArquivos.lstatSync(caminhoRelativo + nomeArquivo).isFile()) {//manipula caminho onde o arquivo vai ser salvo
        return true
    } */
    sistemaDeArquivos
        .writeFileSync(caminhoRelativo + nomeArquivo, JSON.stringify(dados))//envia dados pq vai ser um arquivo ja preenchido SOBRESCREVE O ARQUIVO
    return false
}

module.exports = {
    criarPasta,
    criarArquivo
}