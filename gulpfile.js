
var gulp = require("gulp");
var sass = require("gulp-sass");
var autoprefixer = require("gulp-autoprefixer");
var uglify = require("gulp-uglify");
var browser = require("browser-sync");
 
gulp.task("server", function() {
    browser({
        server: {
            baseDir: "./"
        }
    });
});
gulp.task("js", function() {
    gulp.src(["js/**/*.js","!js/min/**/*.js"])
        .pipe(uglify())
        .pipe(gulp.dest("./js/min"))
        .pipe(browser.reload({stream:true}))
});
 
gulp.task("sass", function() {
    gulp.src("public/styles/sass/**/*.sass")
        .pipe(frontnote())
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(gulp.dest("public/styes/css"))
        .pipe(browser.reload({stream:true}))
});
 
gulp.task("default",['server'], function() {
    gulp.watch(["public/apps/**/*.js","!public/apps/min/**/*.js"],["js"]);
    gulp.watch("public/styles/**/*.sass",["sass"]);
});
