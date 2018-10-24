const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (let x in nums){
    if (x == 5){ 
        break // Sai do laço
    }
    console.log(`${x} = ${nums[x]}`)
}

for (let y in nums){
    if (y == 5){
        continue // Interrompe a execução atual e pulando para a próxima (não imprime o índice 5 aqui)
    }
    console.log(`${y} = ${nums[y]}`)
}

externo: // Um rótulo, o break rotulado age sobre o laço rotulado, saindo do for externo (não use isso)
for (a in nums){
    for (b in nums){
        if (a == 2 && b == 3){
            break externo
        }
        console.log(`Par: ${a}, ${b}`)
    }
}