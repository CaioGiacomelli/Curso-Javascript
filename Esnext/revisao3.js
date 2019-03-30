// Recursos relacionados a objeto

// ES8: Object.values/Object.entries
const obj = {
    a: 1,
    b: 2,
    c: 3
}
console.log(Object.values(obj)); //mostra os valores
console.log(Object.entries(obj)) // mostra chave e valor

// Melhorias na Notação Literal
const nome = 'Carla'
const pessoa = {
    nome, 
    ola(){
        return 'Oi gente!'
    }
}

console.log(pessoa.nome, pessoa.ola());


// Class
class Animal {}
class Cachorro extends Animal {
    falar(){
        return 'Au Au'
    }
}

console.log(new Cachorro().falar());




