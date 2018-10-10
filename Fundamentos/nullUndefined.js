let valor // Não inicializada
console.log(valor) // Undefined

valor = null // Ausência de valor (mas você definiu ela)
console.log(valor)

const produto = {}
console.log(produto)
console.log(produto.preco)
produto.preco = 3.50

produto.preco = null // Não tem preço
console.log(!!produto.preco)
console.log(produto)