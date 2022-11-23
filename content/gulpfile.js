const { src, dest, series, parallel, watch } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const ts = require('gulp-typescript');
const tsProject = ts.createProject('tsconfig.json');

function css() {
    return src('./src/scss/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(dest('./dist'));
}

function js() {
    return tsProject.src()
    .pipe(tsProject()).js
    .pipe(dest('./dist'));
}

function minify(cb) {
    cb();
}

exports.default = function() {
    watch('src/scss/**/*.scss', series(css, minify));
    watch('src/ts/**/*.ts', series(js, minify));
} 