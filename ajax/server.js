const bodyParser = require('body-parser')
const express = require('express')
const app = express()

// middleware: função que vai ser executada qnd 1 requisição chegar

app.use(express.static('.')) // Dentro da pasta atual, na qual o arquivo está, sirva os arquivos estáticos
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json()) //se vier 1 json dentro do body da requisição, esse código transforma o json em objeto

const multer = require('multer') //interpretar o formulário que vem o arquivo do upload

const storage = multer.diskStorage({ //recebe 1 objeto, que serve pra configurar a pasta usada pra salvar o arquivo, e personalizar o nome
    destination: function(req, file, callback){
        callback(null, './upload')
    },
    filename: function(req, file, callback){
        callback(null, `${Date.now()}_${file.originalname}`)
    }
})

const upload = multer({storage}).single('arquivo') //interpreta o upload que vem a partir da requisição feita via AJAX

app.post('/upload', (req, res) => {
    upload(req, res, err => {
        if (err){
            return res.end('Ocorreu um erro')
        }
        res.end('Conclúido com sucesso.')
    })
})

app.post('/formulario', (req, res) => {
    res.send({
        ...req.body,
        id: 1    
    })
})

app.get('/parOuImpar', (req, res) => {
    //req.body
    //req.query
    //req.params
    // são maneiras de pegar informação do cliente. query é com ? no url, params é com /
    const par = parseInt(req.query.numero) % 2 === 0
    res.send({
        resultado: par ? 'par': 'impar'
    })
})

app.listen(8080, () => {
    console.log('Executando...');
})