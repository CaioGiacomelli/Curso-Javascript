console.log(this === global) //this aponta para module.exports
console.log(this === module)
console.log(this === module.exports)
console.log(this === exports)

function logThis() {
    console.log('Dentro de uma função')
    console.log(this === exports)
    console.log(this === module.exports) //Dentro de uma função, é diferente
    console.log(this === global)    
}

logThis()