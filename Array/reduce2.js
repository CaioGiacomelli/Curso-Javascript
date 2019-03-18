const alunos = [
    {nome: 'João', nota: 7.3, bolsista: false},
    {nome: 'Maria', nota: 9.2, bolsista: true},
    {nome: 'Pedro', nota: 9.8, bolsista: false},
    {nome: 'Ana', nota: 8.7, bolsista: true}
]

// Desafio 1: Todos os alunos são bolsitas?
// Crie uma função reduce para decidir se todos os alunos são bolsistas ou não

    // Minha versão
let resultado = alunos.reduce(function(acumulador, atual){
    
    if (atual.bolsista == false){
        acumulador = false
    }

    return acumulador
}, true)

console.log(resultado)

    // Versão Cod3r

const todosBolsistas = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas))

// Desafio 2: Algum aluno é bolsista?

    // Minha versão
resultado = alunos.reduce(function(acumulador, atual){
    
    if (atual.bolsista == true){
        acumulador = true
    }
    
    return acumulador
}, false)

console.log(resultado)

    // Versão Cod3r
const algumBolsista = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(algumBolsista))