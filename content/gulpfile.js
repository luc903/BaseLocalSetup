const { src, dest, series, parallel, watch } = require('gulp');
const browserify = require("browserify");
const source = require("vinyl-source-stream");
const tsify = require("tsify");
const sass = require('gulp-sass')(require('sass'));

function css() {
    return src('./src/scss/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(dest('./dist'));
}

function js() {
    return browserify({
        basedir: '.',
        //Set as true enables sourcemaps
        debug: true,
        entries: ['src/ts/main.ts'],
        cache: {},
        packageCache: {}
    })
    .plugin(tsify)
    .bundle()
    .pipe(source("bundle.js"))
    .pipe(dest('./dist'));
}

function minify(cb) {
    cb();
}

exports.default = function() {
    watch('src/scss/**/*.scss', series(css, minify));
    watch('src/ts/**/*.ts', series(js, minify));
} 