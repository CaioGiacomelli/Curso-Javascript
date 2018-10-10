let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo) // verdadeiro, 2 vezes negação

// True
console.log(!!3) 
console.log(!!-1)
console.log(!!' ') 
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

// False
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtive = false))

let nome = ''
console.log(nome || 'Desconhecido') // Cria um valor default, se o primeiro for nulo, vai o segundo