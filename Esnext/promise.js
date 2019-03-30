
// Função de dois parâmetros que retorna uma Promise. Quando a promessa é atendida, ele chama a função resolve
function falarDepoisDe(segundos, frase){ 
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(frase) //só aceita 1 parâmetro
        }, segundos * 1000)
    })
}

falarDepoisDe(3, 'Que legal!')
    .then(frase => frase.concat('?!?'))
    .then(outraFrase => console.log(outraFrase)) //pode chamar quantas x voce quiser
    .cat(e => console.log(e)) //trata o reject de uma promise

