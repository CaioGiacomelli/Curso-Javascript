const porta = 3004 // Porta é um processo dentro do computador
const express = require('express');

const app = express()
const bancoDeDados = require('./bancoDeDados')

const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true  }))

app.post('./produtos', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) // JSON
})

app.get('/produtos', (req, res, next) => {
    res.send(bancoDeDados.getProdutos()) // Converter para JSON
})

app.get('/produtos/:id', (req, res, next) => {
    res.send(bancoDeDados.getProduto(req.params.id))
})

app.listen(porta, () => {
    console.log(`Servidor executando na porta ${porta}.`);
})