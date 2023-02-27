/* Um banco contratou você para criar uma classe que opere as contas do banco utilizando orientação a objetos.
Crie uma classe chamada Conta
A classe conta recebe dois atributos: saldo e senha(privado), e dois métodos deposito e retirada. o método 
deposito adiciona valor ao saldo (o usuário deve passar a senha, e ela deve ser igual à senha determinada no 
    atributo), e o depósito retira valor do saldo.

Por fim, instancie um objeto chamado contaCorrente e teste as operações. */

import { Conta } from './conta.js';


const conta = new Conta(30); 

let senha = conta.getSenha;

let pin = prompt('Senha:')
if (pin == senha) {

    let resp1 = true
    while (resp1) {

        let resp = prompt('1 Deposito \n 2 Saque\n 3 Saldo em conta\n 4 Sair ')
        switch (resp) {
            case "1":
                conta.deposito();
                break;
            case "2":
                conta.retirada();
                break;
            case "3":
                conta.mostrarSaldo()
                break;
            case "4":
                resp1 = false;
                break;
            default:
                break;
        }
    }
} else {
    throw new Error('ERRO! Senhas Incompatíveis')
}