const escola = 'cod3r'

console.log(escola.charAt(4)) // Letra que está no índice 4 dentro da String
console.log(escola.charAt(5)) // Não da erro, retorna nada
console.log(escola.charCodeAt(3)) // Retorna o Unicord do carácter
console.log(escola.indexOf('d')) // Retorna o índice da letra 'd' na string

console.log(escola.substring(1)) // Imprime od3r
console.log(escola.substring(0, 3)) // Imprime cod

// Duas maneiras de concatenar
console.log('Escola '.concat(escola).concat('!'))
console.log('Escola ' + escola + '!')

console.log(escola.replace(3, 'e'))
console.log(escola.replace(/\w/g, 'e')) // Sintaxe de RegExr

console.log('Ana, Maria, Pedro'.split(',')) // Array com 3 elementos
