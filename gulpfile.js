var gulp = require('gulp');
var scss = require('gulp-scss');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var connect = require('gulp-connect');
var miniCss = require('gulp-minify-css');
var uglify = require('gulp-uglify');

gulp.task('scss', function() {
    gulp.src("./src/*.css")
        .pipe(miniCss())
        .pipe(concat("style.min.css"))
        .pipe(gulp.dest("./src/css/"));
});
gulp.task('js', function() {
    gulp.src('./src/script.js')
        .pipe(uglify())
        .pipe(concat('script.min.js'))
        .pipe(gulp.dest('./src/js/'));
});
gulp.task('server', function() {
    connect.server({
        root: 'src',
        port: 8090,
        livereload: true
    })
});
gulp.task('watch', function() {
    gulp.watch(['./src/js/*.js', './src/*.html'], function() {
        gulp.src('./src/*.html')
            .pipe(connect.reload())
    });
    gulp.watch('./src/css/*.css');
});
gulp.task('default', ['scss', 'js', 'server', 'watch']);