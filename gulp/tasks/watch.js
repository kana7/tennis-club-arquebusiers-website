var gulp = require('gulp'),
watch = require('gulp-watch'),
browserSync = require('browser-sync').create();

gulp.task('watch', () => {
  browserSync.init({
    notify: false,
    server: {
      baseDir: 'app'
    }
  });
  watch('./app/**/*.html', () => {
    browserSync.reload();
  });
  watch('./app/assets/styles/**/*.scss', gulp.series('cssInject')); //compute scss on save and move it to temp + inject to browserSync
  //watch('./app/assets/**/*.css', gulp.series('cssInject'));
  watch('./app/assets/scripts/**/*.js', gulp.series('scriptsRefresh'));
});
gulp.task('cssInject', gulp.series('sass', ()=>{
  return gulp.src('./app/temp/styles/styles.css')
  .pipe(browserSync.stream());
}));
gulp.task('scriptsRefresh', gulp.series('scripts', ()=>{
  browserSync.reload();
}));
