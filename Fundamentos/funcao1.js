// Função sem retorno
function imprimirSoma(a, b){
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2) // Não dá erro, pq dai o segundo parâmetro vai como Undefined. Fica NaN
imprimirSoma(2, 3, 4, 5, 6) // Pega os dois primeiros e soma, o resto ignora
imprimirSoma() // Não da erro, tenta somar Undefined com Undefined e não da erro, fica NaN


// Função com retorno
function soma(a, b = 0){ // Por padrão, a variável b é 0
    return a + b
}

console.log(soma(2, 4))
console.log(soma(2)) // Retorna 2, pois a variável 'b' é default 0
console.log(soma()) // Não da erro, mas retorna NaN