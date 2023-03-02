/* Dada a seguinte lista, de forma decrescente, retorne os dados das 2 listas de forma agrupada, pela seguinte ordem.
usuarios - Crescente: ['Pedro', ‘José', ‘Aderbal', ‘Danilo', 'Luisa', 'Vitoria']
frutas - Descrescente:[ “Banana”, “Morango”, “Maçã”, “Uva”, “Pêra” , “Laranja“]
Resultado esperado: ['Pedro - Laranja', ‘José - Pêra’, 'Aderbal - Uva', 'Danilo - Maçã', 'Luisa - Morango', 'Vitoria - Banana' ] */

const crescente = ['Pedro', 'José', 'Aderbal', 'Danilo', 'Luisa', 'Vitoria']
const descrescente = ['Banana', 'Morango', 'Maçã', 'Uva', 'Pêra', 'Laranja']
descrescente.reverse();
let merge = crescente.map((e, el) => e + "-" + descrescente[el])
console.log(merge)

