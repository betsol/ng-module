//==============//
// DEPENDENCIES //
//==============//

// Local dependencies.
var pkg = require('./package.json');

// Node dependencies.
var fs = require('fs');

// Third-party dependencies.
var del = require('del');
var gulp = require('gulp');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var gutil = require('gulp-util');
var ngAnnotate = require('gulp-ng-annotate');
var concat = require('gulp-concat');
var header = require('gulp-header');


//=========//
// GLOBALS //
//=========//


//=======//
// CLEAN //
//=======//

gulp.task('clean', function (callback) {
  del(['dist'], callback);
});


//=======//
// BUILD //
//=======//

gulp.task('build', ['clean'], function () {
  var headerContent = fs.readFileSync('src/header.js', 'utf8');
  gulp
    .src([
      // @todo: list all source files here
      './src/module.js'
    ])
    .pipe(concat('betsol-ng-module.js'))
    .pipe(ngAnnotate({
      'single_quotes': true
    }))
    .pipe(header(headerContent, { pkg : pkg } ))
    .pipe(gulp.dest('dist'))
    .pipe(uglify())
    .pipe(header(headerContent, { pkg : pkg } ))
    .pipe(rename('betsol-ng-module.min.js'))
    .pipe(gulp.dest('dist'))
    .on('error', gutil.log)
  ;
});


//==============//
// DEFAULT TASK //
//==============//

gulp.task('default', ['build']);
