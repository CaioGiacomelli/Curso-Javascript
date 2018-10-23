function rand([min = 0, max = 1000]){ // você recebe dois atributos, na linha abaixo vc cria um array
    if (min > max) [min, max] = [max, min] //inverte as duas variáveis
    const valor = Math.random() * (max - min) + min 
    return Math.floor(valor)
}

console.log(rand([50, 40]))
console.log(rand([, 40])) //assume os valores padrões

