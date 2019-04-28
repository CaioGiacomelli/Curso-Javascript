// dependencias que preciso pra minha aplicação
const gulp = require('gulp');
const uglifycss = require('gulp-uglifycss');
const concat = require('gulp-concat');

gulp.task('deps', ['deps.css', 'deps.fonts']) // css do font awesome, e fontes do font awesome

gulp.task('deps.css', () => {
    return gulp.src([
        'node_modules/font-awesome/css/font-awesome.min.css'
    ])
               .pipe(uglifycss({"uglyComments": true}))
               .pipe(concat('deps.min.css'))
               .pipe(gulp.dest('build/assets/css'))
}) 

gulp.task('deps.fonts', () => {
    return gulp.src('node_modules/font-awesome/fonts/*.*')
               .pipe(gulp.dest('build/assets/fonts'))
})



