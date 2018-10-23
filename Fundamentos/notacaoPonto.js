console.log(Math.ceil(6.1))

const obj1 = {}
obj1.nome = 'Bola'
// obj1['nome'] = 'Bola2'  Outra maneira de fazer a declaração de um atributo de objeto
console.log(obj1.nome)

function Obj(nome){
    this.nome = nome // Esse this deixa o nome visivel fora do escopo da função
    this.exec = function(){
        console.log('Exec')
    }
}

const Obj2 = new Obj('Cadeira') // Instanciando a função

const Obj3 = new Obj('Mesa') // Duas instâncias diferentes

console.log(Obj2.nome)
console.log(Obj3.nome)

Obj3.exec()