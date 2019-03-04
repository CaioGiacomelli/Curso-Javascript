// Interpretador do JS lê todas as funções
// E carrega antes de ler o resto do código
// Por isso essa linha funciona
console.log(soma(3, 4))
//console.log(sub(3, 4)); Isso n da certo
// A variável precisa ser declarada antes

// function declaration
function soma(x, y){
    return x + y
}

// function expression
const sub = function(x, y){
    return x - y 
}

// named function expression
const mult = function mult(x, y){
    return x * y
}

