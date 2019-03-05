const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa)) // Pega as chaves do objeto
console.log(Object.values(pessoa)) // Pega os valores do objeto
console.log(Object.entries(pessoa)) // Pega todas as chave/valor do objeto

Object.entries(pessoa).forEach(element => {
    console.log(`${element[0]}: ${element[1]}`)
})

Object.entries(pessoa).forEach(([chave, valor]) => { //Destructuring (desestruturando o array)
    console.log(`${chave}: ${valor}`)
})

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true, //se é passivel de ser listado pelo (o atributo)
    writable: false, // atributo n aceita ser sobreescrito
    value: '01/01/2019'
})
pessoa.dataNascimentp = '01/01/2017'
console.log(pessoa.dataNascimento)

// Object.assign (ECAMScript 2015)
const dest = {a: 1}
const o1 = {b: 2}
const o2 = {c: 3, a: 4}

// Pega o objeto de destino e utiliza atributos dos outros objetos
// E concatena no objeto de destino
const obj = Object.assign(dest, o1, o2)
console.log(Object.entries(dest)) //valor de a é sobreescrito

Object.freeze(obj)
obj.c = 1234
console.log(obj)

