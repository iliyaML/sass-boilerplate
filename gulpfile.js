const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');

// Compile Sass
gulp.task('sass', function(){
    return gulp.src(['src/scss/*.scss']) /* src folder */
    .pipe(sass())
    .pipe(gulp.dest('src/css')) /* destination folder */
    .pipe(browserSync.stream());
});

// Watch and Serve
gulp.task('serve', ['sass'], function(){
    // Initialize browserSync
    browserSync.init({
        server: './src'
    });

    // Watch Sass files
    gulp.watch(['src/scss/*.scss'], ['sass']);

    // Watch .html file
    gulp.watch(['src/*.html']).on('change', browserSync.reload);
});

// Default Task
gulp.task('default', ['serve']);