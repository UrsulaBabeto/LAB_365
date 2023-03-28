/* Um banco contratou você para criar uma classe que opere as contas do banco utilizando orientação a objetos.
Crie uma classe chamada Conta
A classe conta recebe dois atributos: saldo e senha(privado), e dois métodos deposito e retirada. o método 
deposito adiciona valor ao saldo (o usuário deve passar a senha, e ela deve ser igual à senha determinada no 
    atributo), e o depósito retira valor do saldo.

Por fim, instancie um objeto chamado contaCorrente e teste as operações. */

import { premiumSavings } from "./premiumSavings.js";
import { Savings } from "./savings.js";

const pS = new premiumSavings(30);



let answer = document.querySelector("#res");
let answer1 = document.querySelector("#res1");
let senha = pS.getSenha;


let depositar = document.querySelector("#depositar");
depositar.addEventListener("click", () => { 
  verificarSenha();
  pS.deposito();
  limparCampos();
});

let retirar = document.querySelector("#retirar");
retirar.addEventListener("click", () => {
  verificarSenha();  
  pS.retirar();
  limparCampos();
});

let mostrarSaldo = document.querySelector("#mostrarSaldo");
mostrarSaldo.onclick = () => {
  verificarSenha();
  pS.mostrarSaldo();
  limparCampos();
};

let atualizaJuros1 = document.querySelector("#atualizaJuros1");
atualizaJuros1.addEventListener("click", () => {
  verificarSenha();
  pS.atualizaJuros(); 
  limparCampos();
});

let atualizaJuros = document.querySelector("#atualizaJuros");
atualizaJuros.addEventListener("click", () => {
  const savings = new Savings(pS.getSaldo);
  verificarSenha();
  savings.atualizaJuros();
  limparCampos();
});

function verificarSenha() {
  let pin = prompt("Senha:");
  if (pin != senha) throw new Error("ERRO! Senhas Incompatíveis");
}

function limparCampos() {
  answer.focus();
  answer1.focus();
  answer.value = "";
  answer1.value = "";
}
