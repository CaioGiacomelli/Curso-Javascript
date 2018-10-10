const prod1 = {} // Par de chaves representa um objeto
prod1.nome = 'Celular Ultra Mega' // Criei um atributo 'nome' pro objeto 'prod1'
prod1.preco = 4998.90
prod1['desconto legal'] = 0.40 // Evitar atributos chave com espaço

console.log(prod1)

// Outra maneira de declarar objetos em Javascript
const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90,
    obj:{
        blabla: 1,
        obj: {
            blabla: 2
        }
    }
}

console.log(prod2)