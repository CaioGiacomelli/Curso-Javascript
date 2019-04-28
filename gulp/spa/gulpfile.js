const gulp = require('gulp');
const util = require('gulp-util'); // checar variavel de ambiente q vai ser passada pro build
const sequence = require('run-sequence'); // o gulp por padrao executa algumas tasks em paralelo, isso pode dar ruim, pra isso o sequence serve, pra serializar

require('./gulpTasks/app'); //pra registrar as tasks dentro do gulp, as de outros arquivos
require('./gulpTasks/deps');
require('./gulpTasks/servidor');

gulp.task('default', () => {
    if (util.env.production){ // só da true qnd der a flag --production em gulp
        sequence('deps', 'app') //chama de forma serial, as tasks deps e app
        //gulp.start('deps', 'app')
    } else {
        sequence('deps', 'app', 'servidor');
        //gulp.start('deps', 'app', 'servidor')
    }
})