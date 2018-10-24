function teste1(num){
    if (num>7)
        console.log(num) // Apenas esta sentença esta associada ao IF
        console.log('Final')
}

teste1(6)
teste1(8)

function teste2 (num){
    if (num>7); // Isso ta erradissimo e vai perder o significado do IF
    {
        console.log(num)
    }
}

teste2(6)
teste2(8)




