const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']

pilotos.pop() // Remove o ultimo elemento do array
console.log(pilotos)

pilotos.push('Verstappen')
console.log(pilotos)

pilotos.shift() // Remove o primeiro elemento do array
console.log(pilotos)

pilotos.unshift('Hamilton') // Adiciona um elemento no inicio do array
console.log(pilotos)

// splice pode adicionar e remover elementos
    //adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)
    //remover
pilotos.splice(3, 1) // Elimina o elemento a partir do indice especificado
console.log(pilotos)

// Retorna um novo array a partir do indice especificado
const algunsPilotos1 = pilotos.slice(2)
console.log(algunsPilotos1)
const algunsPilotos2 = pilotos.slice(1, 4) // pega o indice 1, 2, 3
console.log(algunsPilotos2)

