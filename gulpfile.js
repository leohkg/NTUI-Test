const gulp = require('gulp');
const less = require('gulp-less'); // less -> css
const minifyCSS = require('gulp-minify-css');

gulp.task('less', async function () {
    return gulp.src('src/styles/*.less')
        .pipe(less())
        .pipe(minifyCSS())
        .pipe(gulp.dest('dist/css'));
});