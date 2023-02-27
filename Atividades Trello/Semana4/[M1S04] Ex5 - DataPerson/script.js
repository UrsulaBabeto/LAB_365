/* Crie uma classe chamada Person que receba atributos nome, idade e altura, e um método apresentar que
 imprima: 'Olá me chamo ${nome} tenho ${idade} anos e tenho ${altura} de altura'.

Crie uma classe que herde atributos e métodos da classe Person, adicione o método profissao, e reescreve o 
método apresentar para imprimir ‘Olá me chamo ${nome} tenho ${idade} anos e 
tenho ${altura} de altura e sou ${profissao}’. */


 class Person {
    name;
    age;
    height;
    constructor(name, age, height) {
        this.name = name;
        this.age = age;
        this.height = height;
    }
    apresentar() {
        document.querySelector('#res').innerHTML =`Ola, eu me chamo ${this.name}, tenho ${this.age} de idade e ${this.height} de altura`;
       }
}
class Details extends Person {
    
    constructor(name, age, height,career) {
        super(name, age, height);
        this.career = career;
    }
    Career() {
      document.querySelector('#res').innerHTML = `Ola, eu me chamo ${this.name}, tenho ${this.age} de idade e ${this.height} de altura e sou ${this.career}`
    }
}

  const person = new Person("Ursula", 33, 65)
 person.apresentar()
 
/* const newPerson = new Details("Ursula", 34, 64.4, "Estudante")
newPerson.apresentar()   */
 const newPerson1 = new Details("Ursula", 34, 64.4, "Estudante")
newPerson1.Career()