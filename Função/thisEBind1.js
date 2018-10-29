const pessoa = {
    saudacao: 'Bom dia',
    falar(){
        console.log(this.saudacao) //Sem this vai dar erro
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() // conflito de paradigmas OO e funcional

const falarDePessoa = pessoa.falar.bind(pessoa) // Passa o objeto que você quer que seja resolvido o this
falarDePessoa()