/**
 * Created by wesleyrobinson on 1/20/16.
 */
const gulp = require('gulp');
const myth = require('gulp-myth');
const watch = require('gulp-watch');
const cache = require('gulp-cached');
const changed = require('gulp-changed');
const remember = require('gulp-remember');
const newer = require('gulp-newer');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const plumber = require('gulp-plumber');
const babel = require('gulp-babel');


gulp.task('css', function () {
    return gulp.src('css/*.css')
        .pipe(plumber())
        .pipe(changed('build/css'))
        .pipe(cache('css'))
        .pipe(myth())
        .pipe(remember('css'))
        .pipe(gulp.dest('build/css'));
});

// Minify any new images
gulp.task('images', function() {
    // Add the newer pipe to pass through newer images only
    return gulp.src('build/photos')
        .pipe(changed('build/photos'))
        .pipe(newer('build/photos'))
        .pipe(imagemin())
        .pipe(gulp.dest('build/photos'));

});

gulp.task('scripts', function () {
    return gulp.src('js/**/*.js')
        .pipe(plumber())
        .pipe(changed('build/js'))
        .pipe(cache('js'))
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(remember('js'))
        .pipe(concat('index.js'))
        .pipe(gulp.dest('build/js'));
});

gulp.task('watch', ['css', 'scripts'], function () {
    gulp.watch('css/**/*.css', ['css']);
    gulp.watch('js/**/*.js', ['scripts']);
});

gulp.task('build', ['css', 'images', 'scripts'], function () {});

gulp.task('default', function () {
    // Do stuff
});