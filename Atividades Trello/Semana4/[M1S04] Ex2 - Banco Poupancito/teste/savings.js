/* Agora o banco quer criar uma nova classe chamada ContaPoupança. A conta poupança tem todos os métodos
 e atributos  da classe Conta (herança). Porém, essa nova classe deve ter um novo método chamado atualizaJuros.
  Esse método  deve pegar o valor do saldo e adicionar um ganho baseado em um índice de índice de 0.7% todas as 
  vezes que for  chamado. */
import { Conta } from './conta.js'

export class Savings extends Conta {
  constructor(saldo, senha) {
    super(saldo, senha)
  }
  atualizaJuros() {
     alert(`Saldo em conta: R$ ${this.saldo + (this.saldo * 7 / 100)}`);
  }
}