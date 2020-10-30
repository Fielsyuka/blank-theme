const { src, dest, watch } = require('gulp');
const sass = require("gulp-sass");
const sourcemaps = require('gulp-sourcemaps');
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');

const compileSass = () =>
  src('./assets/sass/**/*.scss')
    .pipe(plumber({ errorHandler: notify.onError('Error: <%= error.message %>') }))
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: "expanded"}))
    .pipe(postcss([
      autoprefixer({})
    ]))
    .pipe(sourcemaps.write(''))
    .pipe(dest('./'));

const watchSassFiles = () => watch('./assets/sass/**/*.scss', compileSass);
exports.default = watchSassFiles;