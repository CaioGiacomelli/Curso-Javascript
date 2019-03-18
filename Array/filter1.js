const produto = [
    {nome: 'Notebook', preco: 2049, fragil: true},
    {nome: 'iPad Pro', preco: 4199, fragil: true},
    {nome: 'Copo de vidro', preco: 12.49, fragil: true},
    {nome: 'Copo de Plástico', preco: 18.99, fragil: false}
]

console.log(produto.filter(function(p){
    return false
}))

const produtoCaro = p => p.preco >= 500
const produtoFragil = p => p.fragil

let resultado = produto.filter(produtoCaro).filter(produtoFragil)
console.log(resultado)