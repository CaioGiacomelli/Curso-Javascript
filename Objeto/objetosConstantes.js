// pessoa aponta para um endereço de memória
const pessoa = { 
    nome: 'João'
}
// Isso aqui n muda a referência da constante
// então pode
pessoa.nome = 'Pedro'
console.log(pessoa)

// Isso da merda, n pode redefinir o objeto constante

// pessoa = {
//     nome: 'Ana'
// }

// Congela o objeto pessoa
// Não consegue mais mexer nele
Object.freeze(pessoa)
pessoa.nome = 'Maria' // n atribui
console.log(pessoa)