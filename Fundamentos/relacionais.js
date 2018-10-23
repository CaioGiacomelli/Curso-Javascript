console.log('01)', '1' == 1) // Não ta preocupado com o tipo, apenas com o valor
console.log('02)', '1' === 1) // Estritamente igual, inclusive o tipo do valor
console.log('03)', '3' != 3)
console.log('04)', '3' !== 3) // Estritamente diferente

console.log('05)', 3 < 2)
console.log('06)', 3 > 2)
console.log('07)', 3 <= 2)
console.log('08)', 3 >= 2)

const d1 = new Date(0)
const d2 = new Date(0)
console.log('09)', d1 === d2) // Pra referência de memórias, n muda nada se for == ou ===
console.log('10)', d1 == d2)
console.log('11)', d1.getTime() === d2.getTime()) //Agora da verdadeiro pq eles tem o mesmo tipo e valor

console.log('12)', undefined == null)
console.log('12)', undefined === null)




