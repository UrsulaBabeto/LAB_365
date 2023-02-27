/* Um banco contratou você para criar uma classe que opere as contas do banco utilizando orientação a objetos.
Crie uma classe chamada Conta
A classe conta recebe dois atributos: saldo e senha(privado), e dois métodos deposito e retirada. o método 
deposito adiciona valor ao saldo (o usuário deve passar a senha, e ela deve ser igual à senha determinada no 
    atributo), e o depósito retira valor do saldo.

Por fim, instancie um objeto chamado contaCorrente e teste as operações. */

/* class Conta {
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
    
    mostrarSaldo(){
      alert(`Saldo em conta: R$ ${this.saldo}`);
    }
  }  

  class Savings extends Conta {
    constructor(saldo, senha) {
      super(saldo, senha)
    }
    atualizaJuros() {
         Number(this.saldo)
       alert(`Saldo em conta: R$ ${Number(this.saldo) + (Number(this.saldo) * 7 / 100)}`);
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
 */

  import { premiumSavings } from "./premiumSavings.js";
const pS = new premiumSavings(30);

let senha = pS.getSenha;

let pin = prompt('Senha:')
if (pin == senha) {
    alert(`Saldo atual: R$ ${pS.getSaldo}`);
    let resp1 = true
    while (resp1) {

        let resp = prompt('1 Deposito \n 2 Saque\n 3 Saldo em conta\n 4 Poupança \n5 Poupança Premium\n 6 Sair ')
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