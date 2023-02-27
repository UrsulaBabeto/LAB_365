/* Agora o banco inventou de criar um novo tipo de poupança, chamada poupancaPremium, que contém uma taxa de 
juros melhor. Crie uma classe que herde atributos e métodos da classe poupanca criada anteriormente e 
modifique o método atualizaJuros (polimorfismo), aumentando o a taxa para 1.2% toda a vez que o método 
for chamado. */

import { Savings } from "../[M1S04] Ex3 - Banco Poupancito 2/script.js";


export class premiumSavings extends Savings{

    constructor(saldo, senha) {
        super(saldo,senha)
    }
    atualizaJuros(){
        let saldoTotal = this.saldo + (this.saldo*1.20)
    }
  }