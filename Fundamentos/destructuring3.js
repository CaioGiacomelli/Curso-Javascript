// Você passa um objeto como parâmetro da função e já associa a variáveis para a função
function rand({min = 0, max = 1000}){
    const valor = Math.random() * (max-min) + min
    return Math.floor(valor)
}

const obj = {
    max: 50,
    min: 40
}

console.log(rand(obj)) //Passo um objeto

