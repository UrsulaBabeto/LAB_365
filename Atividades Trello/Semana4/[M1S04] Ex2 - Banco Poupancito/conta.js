export class Conta {
    #saldo;
    #password;
    constructor(saldo, password) {
        this.#saldo = saldo;
        this.#password = 12345;
    }

    deposito() {
      for (let i = 0; i < 10; i++) {
        let answer = prompt('qual o valro a ser depositado?')
        console.log(this.#saldo += answer)
        
      }
    }
    retirada(ret) {
        console.log(this.#saldo -= ret);
    }
}
