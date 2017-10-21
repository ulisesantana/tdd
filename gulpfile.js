
var gulp = require('gulp');
var mocha = require('gulp-mocha');
var gutil = require('gulp-util');

gulp.task('default', function() {
      gulp.watch(['src/**/**'], ['mocha']);
});

gulp.task('mocha', function() {
    return gulp.src(['src/**/*.test.js'], { read: false })
        .pipe(mocha({ reporter: 'list' }))
        .on('error', gutil.log);
});