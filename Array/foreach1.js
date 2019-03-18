const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

// Passa para a função forEach um callback
    // Este callback (função) é aplicada para cada elemento do array, enquanto é percorrido pelo foreach
    // Este callback tem como parâmetros o elemento e o índice
    // O próprio array pode ser passado como parâmetro do callback
aprovados.forEach(function(nome, indice, array){
    console.log(`${indice + 1}) ${nome}`)
    console.log(array)
})

aprovados.forEach(nome => console.log(nome))

const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)
