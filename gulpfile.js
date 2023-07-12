const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));

gulp.task("sass", function (cb) {
  gulp.src("./scss/*.scss").pipe(sass()).pipe(gulp.dest("./css"));
  cb();
});

gulp.task("watch", function () {
  gulp.watch(["./scss/*"], gulp.series("sass"));
});
