var gulp = require('gulp'),
    gutil = require('gulp-util'),
    sass = require('gulp-sass'),    
    concat = require('gulp-concat');    

gulp.task('sass', function(){
  return gulp.src('./src/sass/**/*.scss')
    .pipe(sass())    
    .pipe(concat('app.css'))
    .pipe(gulp.dest('src/css'))
});

gulp.task('js', function(){
  return gulp.src('./src/js/**/*.js')        
    .pipe(concat('app.js'))
    .pipe(gulp.dest('dist/js/'))
});

gulp.task("watch", () => {
  console.log('watch');
  gulp.watch([
    "./src/css/**/*.scss",    
  ], ["sass"]);
});

gulp.task('webserver', function() {
  console.log('webserver');
  /*connect.server({
    livereload: true
  });*/
});

gulp.task('default', ['sass','watch','webserver'])