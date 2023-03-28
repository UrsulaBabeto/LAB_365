export class Conta {
  saldo;
  #senha;
  res = document.querySelector("#res");
  res1 = document.querySelector("#res1");

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

  set setSaldo(sld) {
    this.saldo = sld;
  }

  deposito() {
    this.saldo += Number(res1.value);
    alert(`Saldo atualizado: R$ ${this.saldo}`);
  }
  retirar() {
    if (this.saldo > res.value) {
      this.saldo -= Number(res.value);
      alert(`Saldo atualizado: R$ ${this.saldo}`);
    } else {
      alert("Saldo insuficiente");
    }
  }

  mostrarSaldo() {
    alert(`Saldo em conta: R$ ${this.saldo}`);
  }
}
