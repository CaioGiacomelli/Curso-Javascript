// Object.preventExtension
    // Previne que adicione novos atributos no objeto
const produto = Object.preventExtensions({
    nome: 'Qualquer',
    preco: 1.99,
    tag: 'promocao'
})
console.log('Extensível', Object.isExtensible(produto))

produto.nome = 'Borracha' // Pode mudar o nome
produto.descricao = 'Borracha escolar branca' // Não cria descrição
delete produto.tag // Pode excluir
console.log(produto)

// Object.seal
    // Não pode adicionar novos atributos, excluir atributos
    // Consegue modificar valores dos atributos normalmente
const pessoa = {
    nome: 'Juliana',
    idade: 35
}
Object.seal(pessoa)
console.log('Selado', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 29 //Isso pode
console.log(pessoa)

// Object.freeze
    // Está selado
    // Também não pode modificar valores dos atributos
    // writable === false



