const { src, dest, watch, series, parallel} = require('gulp');

const sass = require('gulp-sass');
// const concat = require('gulp-concat');
const autoprefixer =  require('gulp-autoprefixer')
const pug = require('gulp-pug');

//Files Desktop
const filesDesktop = {
    scssPath:'./src/desktop/scss/**/*.scss',
    jsPath:'./src/desktop/js/*.js',
    pugPath:'./src/desktop/views/**/*.*'
}
function scssTaskDesktop(){
    return src('./src/desktop/scss/*.scss')
            .pipe(autoprefixer())
            .pipe(sass({outputStyle: "compressed"}))
            .pipe(dest("./dist/desktop/css"));
}
function jsTaskDesktop(){
    return src(filesDesktop.jsPath)
        .pipe(dest("./dist/desktop/js"));
}
function pugTaskDesktop(){
    return src('./src/desktop/views/*.*')
        .pipe(pug({pretty: "\t"}))
        .pipe(dest("./dist/desktop/views"));
}

function watchTask(){
    watch([filesDesktop.scssPath,filesDesktop.jsPath,filesDesktop.pugPath],
        parallel(scssTaskDesktop,jsTaskDesktop,pugTaskDesktop))
}

exports.default = series(
    parallel(scssTaskDesktop,jsTaskDesktop,pugTaskDesktop),
    watchTask
)