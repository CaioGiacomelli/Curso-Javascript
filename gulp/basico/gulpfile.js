const gulp = require('gulp');

gulp.task('default', () => { // Defina a task default do comando gulp, para iniciar as tarefas
    gulp.start('copiar', 'fim') //outras tasks que vão ser definidas, start executa outra task
})

gulp.task('copiar', ['antes1', 'antes2'], () => { //task copiar, antes de executar a task copiar, tem 2 dependencias (antes1 e antes2), pra que task copiar ser executada, precisa que antes1 e antes2 serem executadas
    gulp.src(['pastaA/arquivo1.txt', 'pastaA/arquivo2.txt']) //define os arquivos que serão trabalhados no script
        // .pipe(transformacao1())
        // .pipe(transformacao2()), serve pra fazer transformações no arquivo
        .pipe(gulp.dest('pastaB')) //joga os arquivos transformados em uma determinada pasta
})

gulp.task('antes1', () => {
    console.log('Antes1');
})

gulp.task('antes2', () => {
    console.log('Antes2');
})

gulp.task('fim', ['fim1', 'fim2'])

gulp.task('fim1', () => {
    console.log('Fim 1!!');
})

gulp.task('fim2', () => {
    console.log('Fim 2!!');
})