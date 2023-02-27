/* Um banco contratou você para criar uma classe que opere as contas do banco utilizando orientação a objetos.
Crie uma classe chamada Conta
A classe conta recebe dois atributos: saldo e senha(privado), e dois métodos deposito e retirada. o método 
deposito adiciona valor ao saldo (o usuário deve passar a senha, e ela deve ser igual à senha determinada no 
    atributo), e o depósito retira valor do saldo.

Por fim, instancie um objeto chamado contaCorrente e teste as operações. */


import { Conta } from './[M1S04] Ex2 - Banco Poupancito 2/conta.js';
import { Savings } from "../[M1S04] Ex3 - Banco Poupancito 2/script.js";
import { premiumSavings } from "../[M1S04] Ex4 - Banco Poupancito 3/script.js";

let cc = new Conta(20)
const conta = new Conta(30);



let pin = prompt('Digite a senha')

if (pin == 12345) {


    console.log(conta)
    deposito();
    //retirada();
} else {
    throw ('ERRO! Senhas Incompatíveis')
}
conta.deposito(300)
