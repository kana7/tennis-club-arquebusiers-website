var gulp = require('gulp'),
imagemin = require('gulp-imagemin')
del = require('del'),
usemin = require('gulp-usemin'),
uglify = require('gulp-uglify'),
cssnano = require('gulp-cssnano'),
rev = require('gulp-rev'),
browserSync = require('browser-sync').create();

gulp.task('previewDist', function() {
  browserSync.init({
    notify: false,
    server: {
      baseDir: 'dist'
    }
  });
});

gulp.task('deleteDistFolder', gulp.series('icons', () => {
  return del('./dist');
}));

gulp.task('copyGeneralFiles', () => {
  var pathsToCopy = [
    './app/**/*',
    '!./app/index.html',
    '!./app/assets/images/**',
    '!./app/assets/styles/**',
    '!./app/assets/scripts/**',
    '!./app/assets/temp',
    '!./app/assets/temp/**'
  ];
  return gulp.src(pathsToCopy)
  .pipe(gulp.dest('./dist'));
});

//IMAGEMIN NOT USED SINCE BROKEN ON WINDOWS BEHIND A PROXY SET
gulp.task('optimizeImages', () => {
  return gulp.src(['./app/assets/images/**/*', '!./app/assets/images/icons', '!./app/assets/images/icons/**/*'])
  /*.pipe(imagemin({
  progressive: true,
  interlaced: true,
  multipass: true
}))*/
.pipe(gulp.dest('./dist/assets/images'));
});

gulp.task('usemin', gulp.series('sass', 'scripts', () => {
  return gulp.src('./app/**/*.html')
  .pipe(usemin({
    css: [function() {
      return rev();
    }, function() {
      return cssnano();
    }],
    js: [function() {
      return rev();
    }, function() {
      return uglify();
    }]
  }))
  .pipe(gulp.dest('./dist'));
}));

gulp.task('build', gulp.series('deleteDistFolder', 'copyGeneralFiles', 'optimizeImages', 'usemin'));
