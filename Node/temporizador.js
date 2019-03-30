const schedule = require('node-schedule');

const tarefa1 = schedule.scheduleJob('*/5 * 9 * * 4', function(){
    console.log('Executando Tarefa 1!', new Date().getSeconds());
}) //A cada 5 segundos, qualquer minuto, as 9h, ignora o dia do mes, ignora o mes, toda quinta (4)

setTimeout(function () {
    tarefa1.cancel()
    console.log('Cancelando Tarefa 1!')
}, 20000)

// setImmediate - timeout com valor zerado
// setInterval - a cada 2 segundos, rodar 1 função

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = (new schedule.Range(1, 5)) //de segunda  a sexta
regra.hour = 9
regra.second = 30

const tarefa2 = schedule.scheduleJob(regra, function(){
    console.log('Executando Tarefa 2', new Date().getSeconds());
})

