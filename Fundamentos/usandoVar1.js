{
    {
        {
            { var sera = 'Será?' }
        }
    }
}

console.log(sera) // Consigo acessar o valor da variavel sera, mesmo fora do escopo

function teste(){
    var local = 1234 // Só é visível dentro da function
    console.log(sera) // Isso da certo também
}

teste()
console.log(local) // Isso da errado, escopos criados por funções deixam a variável local
