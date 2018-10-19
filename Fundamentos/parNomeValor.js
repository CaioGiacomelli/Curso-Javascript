// par nome/valor
const saudacao = "opa" // contexto léxico 1

function exec(){
    const saudacao = "falaa" // contexto léxico 2
    return saudacao // Como as variaveis estão em contextos diferentes, n gera conflito
}

// Objetos são grupos aninhados de pares nome/valor
const client = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'rua',
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(client)