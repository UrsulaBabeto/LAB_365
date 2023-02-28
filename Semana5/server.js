//const path = require('path')// puxa bibliotecas disponiveis

const chaves = ['teste', 'casa', 'valor', 'acesso']

const dados = {
    'teste': 1,
    'casa': 'Floripa',
    'valor': 10,
     'acesso': {
        'teste': 2
    } 
}
chaves.map((key) => {
    if (key == 'acesso') {
        console.log(dados[key]['teste']);
        return
    }
    console.log(dados[key])
})
/* 
console.log(dados[chaves[3]][chaves[0]]);
//              " acesso"    " teste" */