function tratarErroELancar(e){
    // throw new Error('...')
    //throw 10
    //throw true
    //throw 'mensagem'
    throw{ // Throw lança um erro de qualquer tipo
        nome: e.name,
        msg: e.message,
        date: new Date 
    }
}

function imprimirNomeGritado(obj){
    try{
        console.log(obj.name.toUpperCase() + '!!!')
    }
    catch (e) {
        tratarErroELancar(e)
    } finally { // Mesmo com erro vai executar o finally (sempre vai executar isso)
        console.log('final')
    }
}

const obj = {
    nome: 'Roberto'
}

imprimirNomeGritado(obj) 