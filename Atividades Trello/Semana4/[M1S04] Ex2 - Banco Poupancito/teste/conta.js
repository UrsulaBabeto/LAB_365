   export class Conta {
    #saldo;
    #senha;
    constructor(saldo) {
      this.#saldo = saldo;
      this.#senha = 1234;
    }
  
    get getSenha() {
      return this.#senha;
    }
    get getSaldo() {
      return this.#saldo;
    }
    
    deposito() {
      let answer = prompt('Valor para deposito: R$')
      this.#saldo += Number(answer)
      alert(`Saldo atualizado: R$ ${this.#saldo}`);
    }
    retirada() {
     let answer = prompt('Valor de saque: R$')
      this.#saldo -= Number(answer);
      alert(`Saldo atualizado: R$ ${this.#saldo}`);
    }  
    
    mostrarSaldo(){
      alert(`Saldo em conta: R$ ${this.#saldo}`);
    }
  }  