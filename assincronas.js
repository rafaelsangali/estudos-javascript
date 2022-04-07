// Metodos de iteração de array
// 1 - map: retorna um novo array sem alterar o array original,
// criando uma cópia com as alterações que desejamos

let alunas = ["Isabela", "Maria", "Patricia", "Maristraldis"]

alunas.map(aluna => console.log(aluna));

// 2 - Filter: retorna um novo array com os elementos filtrados

let numeros = [34, 67,73, 3, 90, 3482]

var numerosImpares = numeros.filter(numeros => numeros % 2 != 0) // filtrar números impares
console.log(numerosImpares)

// 3 - Find: encontra e retorna o primeiro elemento que achar
// igual ao elemento passado por parâmetro.

let produtos = ["Geladeira", "Fogão", "Mesa", "Micro-ondas"]

let encontrarMesa = produtos.find(produtos => produtos === "Mesa")
console.log(encontrarMesa)

// 4 - Sort: ordena o array

console.log(numeros.sort((a,b) => a - b))

// 5 - Reduce: reduz nosso array a um resultado de uma operação matemática

let numbers = [1, 2, 5, 423, 124, 123]

let soma = numbers.reduce((valorAnterior,valorAtual) => {
    return valorAnterior + valorAtual
})
console.log(soma)