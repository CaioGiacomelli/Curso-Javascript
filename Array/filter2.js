Array.prototype.filter2 = function(callback){

    const resultado = []
    for (let i = 0; i < this.length; i++){
        if (callback(this[i], i, this)){
            resultado.push(this[i])
        }
    }
    return resultado
}

const produto = [
    {nome: 'Notebook', preco: 2049, fragil: true},
    {nome: 'iPad Pro', preco: 4199, fragil: true},
    {nome: 'Copo de vidro', preco: 12.49, fragil: true},
    {nome: 'Copo de Plástico', preco: 18.99, fragil: false}
]

const produtoCaro = p => p.preco >= 500
const produtoFragil = p => p.fragil

let resultado = produto.filter2(produtoCaro).filter2(produtoFragil)
console.log(resultado)