var numero = 1
{
    let numero = 2 // Tem o escopo apenas dentro do bloco
    console.log('dentro = ' + numero) // Preferência apenas no escopo menor
}

console.log('fora = ' + numero) // Imprime o valor do numero global