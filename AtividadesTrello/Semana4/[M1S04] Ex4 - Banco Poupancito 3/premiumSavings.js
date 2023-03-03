/* Agora o banco inventou de criar um novo tipo de poupança, chamada poupancaPremium, que contém uma taxa de 
juros melhor. Crie uma classe que herde atributos e métodos da classe poupanca criada anteriormente e 
modifique o método atualizaJuros (polimorfismo), aumentando o a taxa para 1.2% toda a vez que o método 
for chamado. */

import { Savings } from './savings.js'


export class premiumSavings extends Savings {
  constructor(saldo, senha) {
    super(saldo, senha)
  }
  atualizaJuros() {
    alert(`Saldo em conta: R$ ${Number(this.saldo) + (Number(this.saldo) * 0.7 / 100)}`);
    console.log(this.saldo)
    return this.saldo
  }
}   