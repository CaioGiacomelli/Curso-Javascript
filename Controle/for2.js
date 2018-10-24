const notas = [6.7, 5.3, 4.2, 3.2]

for (let i in notas){
    console.log(i, notas[i])
}

console.log(i)

const pessoa = {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 29,
    peso: 64
}

for (let atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`)
}