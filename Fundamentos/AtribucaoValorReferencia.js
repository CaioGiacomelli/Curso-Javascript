// Atribuição por referência (Acontece isso com Objetos e funções)
const a = {name: 'Teste'} // A constante 'a' aponta para o endereço de memória do objeto
const b = a // 'b' aponta para o mesmo endereço de memória de 'a'
b.name = 'Opa'
console.log(a.name)

// Atribução por valor (Acontece isso com tipos primitivos)
let c = 3
let d = c
d++
console.log(d) 
console.log(c)