/* Um banco contratou você para criar uma classe que opere as contas do banco utilizando orientação a objetos.
Crie uma classe chamada Conta
A classe conta recebe dois atributos: saldo e senha(privado), e dois métodos deposito e retirada. o método 
deposito adiciona valor ao saldo (o usuário deve passar a senha, e ela deve ser igual à senha determinada no 
    atributo), e o depósito retira valor do saldo.

Por fim, instancie um objeto chamado contaCorrente e teste as operações. */

 import { Conta } from './conta.js';
import { Savings } from './savings';
import { premiumSavings } from './premiumSavings'; 
class Conta {
    saldo;
    #senha;
    constructor(saldo) {
        this.saldo = saldo;
        this.#senha = 1234;
    }

    get getSenha() {
        return this.#senha;
    }
    get getSaldo() {
        return this.saldo;
    }
    deposito() {
        let answer = prompt('Valor para deposito: R$')
        this.saldo += Number(answer)
        alert(`Saldo atualizado: R$ ${this.saldo}`);
    }
    retirada() {
        let answer = prompt('Valor de saque: R$')
        this.saldo -= Number(answer);
        alert(`Saldo atualizado: R$ ${this.saldo}`);
    }

    mostrarSaldo() {
       alert(`Saldo em conta: R$ ${this.saldo}`);
    }
}

class Savings extends Conta {
    constructor(saldo, senha) {
      super(saldo, senha)
    }
    atualizaJuros() {
       alert(`Saldo em conta: R$ ${this.saldo + (this.saldo * 7 / 100)}`);
    }
  }

class premiumSavings extends Savings{
    constructor(saldo, senha) {
        super(saldo,senha)
    }
    atualizaJuros(){
         alert(`Saldo em conta: R$ ${this.saldo + (this.saldo*1.2/100)}`)
    }
  }

const conta = new Conta(30);
const saving = new Savings(30);
const pS = new premiumSavings(30);

let senha = conta.getSenha;

let pin = prompt('Senha:')
if (pin == senha) {

    let resp1 = true
    while (resp1) {
        let resp = prompt('Deposito 1;\n Saque 2\n Saldo em conta 3\n Poupança 4\n Poupança Premium 5\n Sair 6')
        switch (resp) {
            case "1":
                pS.deposito();
                //alert(`Saldo atualizado: R$ ${conta.getSaldo}`);
                break;
            case "2":
                pS.retirada();
                //alert(`Saldo atualizado: R$ ${conta.getSaldo}`);
                break;
            case "3":
                pS.mostrarSaldo()
                //alert(`Saldo em conta: R$ ${conta.getSaldo}`);
                break;
            case "4":
                pS.atualizaJuros();
                break;
            case "5":
                pS.atualizaJuros();
                break;
            case "6":
                resp1 = false;
                break;
            default:
                break;
        }
    }
} else {
    throw new Error('ERRO! Senhas Incompatíveis')
}