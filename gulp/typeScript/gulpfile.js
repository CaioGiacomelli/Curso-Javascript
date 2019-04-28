const gulp = require('gulp');
const ts = require('gulp-typescript'); //permite fazer o processamento de typescript
const tsProject = ts.createProject('tsconfig.json') //Usa as configurações basicas de 1 projeto typescript

gulp.task('default', () => {
    return tsProject.src()
                    .pipe(tsProject()) //compila ts pra js
                    .pipe(gulp.dest('build'))
})

