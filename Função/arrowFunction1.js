let dobro = function (a){
    return 2 * a
}

dobro = (a) => {
    return 2 * a
}

dobro = a => 2 * a // retorno implícito
console.log(dobro(Math.PI))

let ola = function(){
    return 'Olá'
}

ola = () => 'Olá'
ola = _ => 'Olá' // _ é um parâmetro, mas é só ignorar e gg
console.log(ola())
