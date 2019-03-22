const fs = require('fs')

const caminho = __dirname + '/arquivo.json'
//dirname é uma constante que representa o diretório atual

//sincrono...
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

//assincrono...
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}: ${config.db.port}`)
})

const config = require('./arquivo.json')
console.log(config.db)

fs.readdir(__dirname, (error, arquivos) => {
    console.log('Conteúdo da pasta..')
    console.log(arquivos)
})