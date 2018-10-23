let num1 = 1
let num2 = 2

num1++
console.log(num1)  

--num1 // Maior precedência do que a pós-fixada
console.log(num1)

console.log(++num1 === num2--) //num1 foi executado antes da comparação, num2 foi executado depois