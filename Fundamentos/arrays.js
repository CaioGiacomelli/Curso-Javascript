const valores = [7.7, 8.9, 6.3, 9.2]
console.log (valores[0], valores[3])
console.log (valores[4]) // Undefined

valores[4] = 10
console.log(valores)

valores[10] = 2.3
console.log(valores)
console.log(valores.length)

valores.push({id: 3}, false, null, 'teste')
console.log(valores)

console.log(valores.pop()) //Tirar o último elemento do array
console.log(valores)

delete valores[0] // Tirou o primeiro termo
console.log(valores)
console.log(typeof valores) // Object type