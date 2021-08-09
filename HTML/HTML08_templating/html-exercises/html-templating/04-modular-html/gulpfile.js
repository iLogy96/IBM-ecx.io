const { src, dest, watch, series } = require('gulp');
const nunjucksRender = require('gulp-nunjucks-render');

function build() {
  return src('app/pages/*.njk')
    .pipe(
      nunjucksRender({
        path: ['app/partials'],
      })
    )
    .pipe(dest('dist'));
}

function copyAssets() {
    return src(['app/assets/*.svg', 'app/assets/*.jpg', 'app/assets/*.png', 'app/assets/*.css'])
    .pipe(dest('dist/assets/'));
}

exports.default = function () {
  watch('app/**/*.njk', series(build, copyAssets));
  watch('app/assets/*', copyAssets);
};
