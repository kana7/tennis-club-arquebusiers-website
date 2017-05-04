var gulp = require('gulp'),
svgSprite = require('gulp-svg-sprite'),
rename = require('gulp-rename')
del = require('del'),
svg2png = require('gulp-svg2png');

var config = {
  shape: {
    spacing: {
      padding: 1
    }
  },
  mode: {
    css: {
      variables : {
        replaceSvgWithPng : () => {
          console.log("test");
          return (sprite, render) => {
            return render(sprite).split('.svg').join('.png');
          }
        }
      },
      sprite: 'sprite.svg',
      render: {
        css: {
          template: './gulp/templates/sprite.css'
        }
      }
    }
  }
};

gulp.task('beginClean', () => {
  return del(['./app/temp/sprite', './app/assets/images/sprites', './app/temp/fonts']);
});

gulp.task('createSprite', ()=>{
  return gulp.src('./app/assets/images/icons/**/*.svg')
  .pipe(svgSprite(config))
  .pipe(gulp.dest('./app/temp/sprite/'));
});

gulp.task('moveFontsIcons',  ()=>{
  return gulp.src('./app/assets/fonts/**')
  .pipe(gulp.dest('./app/temp/fonts'));
});

gulp.task('createPngCopy', ()=>{
  return gulp.src('./app/temp/sprite/css/*.svg')
  .pipe(svg2png())
  .pipe(gulp.dest('./app/temp/sprite/css'));
});

gulp.task('copySpriteGraphic', ()=>{
  return gulp.src('./app/temp/sprite/css/**/*.{svg,png}')
  .pipe(gulp.dest('./app/assets/images/sprites'));
});

gulp.task('copySpriteCSS', ()=>{
  return gulp.src('./app/temp/sprite/css/*.css')
  .pipe(rename('_sprite.scss'))
  .pipe(gulp.dest('./app/assets/styles/modules'));
});

gulp.task('endClean', ()=>{
  return del('./app/temp/sprite');
});

gulp.task('icons', gulp.series('beginClean', 'moveFontsIcons'));
