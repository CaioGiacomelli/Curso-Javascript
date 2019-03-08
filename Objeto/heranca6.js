function Aula(nome, videoID) {
    this.nome = nome
    this.videoID = videoID
}

const aula1 = new Aula('Bem vindo', 123)
const aula2 = new Aula('Até breve', 456)
console.log(aula1, aula2)

// simulando o new
function novo(f, ...params){
    const obj = {} //Cria um objeto novo
    obj.__proto__ = f.prototype //Associa o prototipo do objeto ao atributo prototype da funcao passada
    f.apply(obj, params) //executa a funcão f passando como parametro o obj e os parametros
    return obj
}

const aula3 = novo(Aula, 'Bem vindo', 123)
const aula4 = novo(Aula, 'Até breve', 456)
console.log(aula3, aula4)