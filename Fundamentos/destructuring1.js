const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000 
    }
}

const {nome, idade} = pessoa // Destructuring, pega as variaveis do objeto tudo em uma linha
console.log(nome, idade)

const {nome: n, idade: i} = pessoa // Muda os nomes das variaveis
console.log(n, i)

const {sobrenome, bemHumorada = true} = pessoa // Por padrão, se não há nada no objeto, volta true
console.log(sobrenome, bemHumorada)

const { endereco: {logradouro, numero, cep}} = pessoa
console.log(logradouro, numero, cep)