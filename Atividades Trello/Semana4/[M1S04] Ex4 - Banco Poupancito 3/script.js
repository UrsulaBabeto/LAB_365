/* Um banco contratou você para criar uma classe que opere as contas do banco utilizando orientação a objetos.
Crie uma classe chamada Conta
A classe conta recebe dois atributos: saldo e senha(privado), e dois métodos deposito e retirada. o método 
deposito adiciona valor ao saldo (o usuário deve passar a senha, e ela deve ser igual à senha determinada no 
    atributo), e o depósito retira valor do saldo.

Por fim, instancie um objeto chamado contaCorrente e teste as operações. */

import { premiumSavings } from './premiumSavings';

const pS = new premiumSavings(30);

let senha = conta.getSenha;

let pin = prompt('Senha:')
if (pin == senha) {

    let resp1 = true
    while (resp1) {

        let resp = prompt('1 Deposito \n 2 Saque\n 3 Saldo em conta\n 4 Poupança Premium\n 5 Sair ')
        switch (resp) {
            case "1":
                pS.deposito();
                break;
            case "2":
                pS.retirada();
                break;
            case "3":
                pS.mostrarSaldo()
                break;
            case "4":
                pS.atualizaJuros();
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