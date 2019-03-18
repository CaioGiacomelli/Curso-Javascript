// Utilizamos o lodash, que está na pasta node_modules

const _ = require('lodash') // vai procurar dentro de node_modules
setInterval(() => console.log(_.random(1, 10)), 2000)

