/* Um banco contratou você para criar uma classe que opere as contas do banco utilizando orientação a objetos.
Crie uma classe chamada Conta
A classe conta recebe dois atributos: saldo e senha(privado), e dois métodos deposito e retirada. o método 
deposito adiciona valor ao saldo (o usuário deve passar a senha, e ela deve ser igual à senha determinada no 
    atributo), e o depósito retira valor do saldo.

Por fim, instancie um objeto chamado contaCorrente e teste as operações. */


import { Conta } from './conta.js';
import { Savings } from './savings';
import { premiumSavings } from './premiumSavings';



const conta = new Conta(30);
const saving = new Savings;
const pS = new premiumSavings;

let senha = conta.getSenha;

while (resp != 6) {
    let pin = prompt('Senha:')
    if (pin == senha) {
        alert(`Saldo em conta: R$ ${conta.getSaldo}`);
        let resp = prompt('Deposito 1;\n Saque 2\n Saldo em conta 3\n Poupança 4\n Poupança Premium 5\n Sair 6')

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
                alert(`Saldo em conta: R$ ${saving.atualizaJuros()}`);
                break;
            case "5":
                alert(`Saldo em conta: R$ ${pS.atualizaJuros()}`);
                break;
            default:
                break;
        }
    } else {
        throw new Error('ERRO! Senhas Incompatíveis')
    }
}