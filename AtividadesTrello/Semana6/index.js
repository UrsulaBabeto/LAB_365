/* 
[M1S06] Ex 3 - Iniciando um servidor node
Inicie um servidor node local em sua máquina utilizando express.
O resultado esperado é imprimir na tela do navegador uma mensagem da sua escolha.
 */

const express = require('express')
const app = express();

app.listen(3333, (() => {
    console.log('servidor online!!')
})) 