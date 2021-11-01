var gulp = require('gulp');
var sass = require('gulp-dart-sass');
var rename = require('gulp-rename');

gulp.task('sass', function () {
  return gulp.src('src/scss/custom.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(rename('bootstrap.css'))
    .pipe(gulp.dest('dist/html_bootstrap_js_custom/css'))
});

gulp.task('dist-css', function (done) {
  gulp.src('./src/css/**.*')
      .pipe(gulp.dest('./dist/html_bootstrap_js_custom/css'))
      .pipe(gulp.dest('./dist/html_bootstrap_js/css'))
      .pipe(gulp.dest('./dist/html_bootstrap/css'));
    done();
});

gulp.task('dist-js', function (done) {
  gulp.src('./src/js/**.*')
      .pipe(gulp.dest('./dist/html_bootstrap_js_custom/js'))
      .pipe(gulp.dest('./dist/html_bootstrap_js/js'))
    done();
});

gulp.task('watch', function () {
  gulp.watch(['./src/js/*.js'],  gulp.series('dist-js'));
});
