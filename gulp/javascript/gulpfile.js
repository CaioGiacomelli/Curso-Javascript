const gulp = require('gulp');
const concat = require('gulp-concat'); //serve pra concatenar arquivos em 1 só
//const uglify = require('gulp-uglify'); //tirar espaços em brancos, otimiza e compacta o código
const babel = require('gulp-babel'); //traduz linguas, de 1 para outra (como versões por exemplo), pra buscar compatibilidade de browsers

gulp.task('default', () => {
    return gulp.src('src/**/*.js') //pega todos os arquivos, incluindo em src ou subpastas, tendo que tenha a extensao js
               .pipe(babel({
                   minified = true, // também minifica além do uglify
                   comments: false,
                   presets: ["env"]
               }))
               //.pipe(uglify())
               .on('error', function (err) {console.log(err)})
               .pipe(concat('codigo.min.js'))
               .pipe(gulp.dest('build'))
})