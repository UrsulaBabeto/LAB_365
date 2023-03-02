/* Um banco contratou você para criar uma classe que opere as contas do banco utilizando orientação a objetos.
Crie uma classe chamada Conta
A classe conta recebe dois atributos: saldo e senha(privado), e dois métodos deposito e retirada. o método 
deposito adiciona valor ao saldo (o usuário deve passar a senha, e ela deve ser igual à senha determinada no 
    atributo), e o depósito retira valor do saldo.

Por fim, instancie um objeto chamado contaCorrente e teste as operações. */

import { Savings } from './savings.js';

const saving = new Savings(30);
let senha = saving.getSenha;

let pin = prompt('Senha:')
if (pin == senha) {

    let resp1 = true
    while (resp1) {

        let resp = prompt('1 Deposito \n 2 Saque\n 3 Saldo em conta\n 4 Poupança \n 5 Sair ')
        switch (resp) {
            case "1":
                saving.deposito();
                break;
            case "2":
                saving.retirada();
                break;
            case "3":
                saving.mostrarSaldo()
                break;
            case "4":
               saving.atualizaJuros();
                break;
            case "5":
                resp1 = false;
                break;
            default:
                break;
        }
    }
} else {
    throw new Error('ERRO! Senhas Incompatíveis')
}