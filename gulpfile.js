var gulp = require("gulp");
var sass = require("gulp-sass");

gulp.task("sass", function() {
  var sassOpts = {
    outputStyle: 'compressed',
    indentedSyntax: true
  };
  gulp.src("sass/**/*.s*ss")
    .pipe(sass(sassOpts).on('error', sass.logError))
    .pipe(gulp.dest("css"));
});

gulp.task("default", ["sass"]);
