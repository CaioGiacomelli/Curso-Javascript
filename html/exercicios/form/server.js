const express = require('express')
const app = express()
const bodyParser = require('body-parser')
// Faz um parser do corpo do request e vai jogar no request.body

app.use(bodyParser.urlencoded({extended: true})) //Interpreta e cria 1 objeto que é o body a partir do corpo da requisição, para ser utilizado


app.post('/usuarios', (req, res) => {
    console.log(req.body);
    res.send('<h1>Parabéns. Usuário incluido</h1>')
})

app.post('/usuarios/:id', (req, res) => {
    console.log(req.params.id);
    console.log(req.body);
    res.send('<h1>Parabéns. Usuário Alterado</h1>')
})

app.listen(3003)