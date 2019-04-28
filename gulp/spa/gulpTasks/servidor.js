// Startar o servidor, de desenvolvimento
const gulp = require('gulp');
const watch = require('gulp-watch');
const webserver = require('gulp-webserver');

gulp.task('monitorarMudanças', () => { //monitora os arquivos, se mudar, chama a task necessaria
    watch('src/**/*.html', () => gulp.start('app.html'))
    watch('src/**/*.scss', () => gulp.start('app.css'))
    watch('src/**/*.js', () => gulp.start('app.js'))
    watch('src/assets/imgs/**/*.*', () => gulp.start('app.imgs'))
})

gulp.task('servidor', ['monitorarMudanças'], () => {
    return gulp.src('build').pipe(webserver({ //webserver da aplicação
        livereload: true,
        port: 8080,
        open: true
    }))
})