/* Um banco contratou você para criar uma classe que opere as contas do banco utilizando orientação a objetos.
Crie uma classe chamada Conta
A classe conta recebe dois atributos: saldo e senha(privado), e dois métodos deposito e retirada. o método 
deposito adiciona valor ao saldo (o usuário deve passar a senha, e ela deve ser igual à senha determinada no 
    atributo), e o depósito retira valor do saldo.

Por fim, instancie um objeto chamado contaCorrente e teste as operações. */


import { Conta } from './conta.js';
import { Savings } from "../[M1S04] Ex3 - Banco Poupancito 2/script.js";
import { premiumSavings } from "../[M1S04] Ex4 - Banco Poupancito 3/script.js";

const conta = new Conta(30);
conta.Savings

let senha = conta.getSenha;

let pin = prompt('Senha:')
if (pin == senha) {
    let resp = prompt('Deposito 1;\n Saque 2\n Saldo em conta 3\n Poupança 4')

    switch (resp) {
        case "1":
            conta.deposito();
            alert(`Saldo atualizado: R$ ${conta.getSaldo}`);
            break;
        case "2":
            conta.retirada();
            alert(`Saldo atualizado: R$ ${conta.getSaldo}`);
            break;
        case "3":
            alert(`Saldo em conta: R$ ${conta.getSaldo}`);
            break;
            case "4":
                alert(`Saldo em conta: R$ ${conta.getSaldo}`);
                break;

        default:
            break;
    }




} else {
    throw new Error('ERRO! Senhas Incompatíveis')
}

