var gulp = require('gulp');
var concatCss = require('gulp-concat-css');
var cleanCSS = require('gulp-clean-css');
var sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('default', function () {
    return gulp.src('css/*.css')
        .pipe(concatCss("bundle.css"))
        .pipe(autoprefixer({
            browsers: ['last 10 versions'],
            cascade: false
        }))
        .pipe(cleanCSS("bundle.css"))
        .pipe(gulp.dest('app/'))


});
gulp.task("watch",function () {
    gulp.watch('css/*.css',['default'])

})