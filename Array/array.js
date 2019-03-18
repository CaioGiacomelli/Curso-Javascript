// Array é um Objeto
console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3]) //undefined, sem erro

aprovados[3] = 'Paulo'
aprovados.push('Abia')
console.log(aprovados.length)

aprovados[9] = 'Rafael'
console.log(aprovados.length)
console.log(aprovados[8] === undefined)
console.log(aprovados)

aprovados.sort() // Ordena o array
console.log(aprovados)

delete aprovados[1]
console.log(aprovados[1])
console.log(aprovados[2])

aprovados = ['Bia', 'Carlos', 'Ana']
// Primeiro parâmetro diz em qual posição do array desejas trabalhar
// Segundo parâmetro decide quantos elementos a partir do parâmetro 1 serão excluidos
// Outros parâmetros adicionarão os elementos a partir do primeiro parâmetro
// Este método pode adicionar e remover elementos de um array
aprovados.splice(1, 2, 'Elemento1', 'Elemento2')
console.log(aprovados)




