const gulp = require("gulp");
const concat = require("gulp-concat");
const fileinclude = require("gulp-file-include");
const htmlmin = require("gulp-htmlmin");
const imagemin = require("gulp-imagemin");
const terser = require("gulp-terser");
const inlinesource = require("gulp-inline-source");
// const gulpInlineSource = require("gulp-inline-source");
//todo - why 2 inline src?

// ===Functions===

// file include, inline src, html minify
function htmlDist(src) {
  return fileInclude(src)
    .pipe(
      inlinesource({
        rootpath: "dist",
      })
    )
    .pipe(htmlmin({ collapseWhitespace: true, removeComments: true }));
}

// include files
function fileInclude(src) {
  return gulp.src([src]).pipe(
    fileinclude({
      prefix: "@@",
      basepath: "@file",
    })
  );
}

// ===Tasks===

gulp.task("html", function (cb) {
  htmlDist("src/index.html").pipe(gulp.dest("dist"));
  htmlDist("src/pages/*.html").pipe(gulp.dest("dist"));
  htmlDist("src/music/*.html").pipe(gulp.dest("dist/music"));
  cb();
});

// image minification
gulp.task("imagemin", function (cb) {
  gulp.src("src/img/*").pipe(gulp.dest("dist/img"));
  gulp.src("src/img/gallery/*").pipe(gulp.dest("dist/img"));
  gulp.src("src/img/album/jpg/*").pipe(gulp.dest("dist/img"));
  gulp.src("src/img/album/webp/*").pipe(gulp.dest("dist/img"));
  gulp.src("src/img/bio/jpg/*").pipe(gulp.dest("dist/img"));
  gulp.src("src/img/bio/webp/*").pipe(gulp.dest("dist/img"));
  gulp.src("src/img/gallery/jpg/*").pipe(gulp.dest("dist/img"));
  gulp.src("src/img/gallery/webp/*").pipe(gulp.dest("dist/img"));
  gulp.src("src/img/home/*").pipe(gulp.dest("dist/img"));
  gulp.src("src/img/branding/*").pipe(gulp.dest("dist/img"));
  cb();
});

// favicon
gulp.task("favicon", function (cb) {
  gulp.src("src/favicon/*").pipe(gulp.dest("dist/favicon"));
  cb();
});

// javascript
gulp.task("scripts", function (cb) {
  gulp.src("src/js/*.js").pipe(terser()).pipe(gulp.dest("dist/js"));
  cb();
});

// php
gulp.task("php", function (cb) {
  gulp.src("src/php/*.php").pipe(gulp.dest("dist"));
  cb();
});

// audio
gulp.task("audio", function (cb) {
  gulp.src("src/audio/*").pipe(gulp.dest("dist/audio"));
  gulp
    .src("src/audio/an-ella-fitzgerald-tribute/*")
    .pipe(gulp.dest("dist/audio"));
  gulp.src("src/audio/after-the-quake/*").pipe(gulp.dest("dist/audio"));
  gulp.src("src/audio/travel-journal/*").pipe(gulp.dest("dist/audio"));
  gulp.src("src/audio/five-haiku/*").pipe(gulp.dest("dist/audio"));
  cb();
});

// default task - watch and update
function defaultTask(cb) {
  // ===watch html files===
  gulp.watch("src/inc/*.html", gulp.series("html")); // included files
  gulp.watch("src/index.html", gulp.series("html")); // index
  gulp.watch("src/pages/*.html", gulp.series("html")); // pages
  gulp.watch("src/music/*.html", gulp.series("html")); // music pages
  // ===watch js files===
  gulp.watch("src/js/*.js", gulp.series("scripts"));
  // ===watch images===
  gulp.watch("src/img/*", gulp.series("imagemin"));
  gulp.watch("src/img/gallery/*", gulp.series("imagemin"));
  gulp.watch("src/img/album/*", gulp.series("imagemin"));
  gulp.watch("src/img/branding/*", gulp.series("imagemin"));
  // ===watch css===
  gulp.watch("dist/style.css", gulp.series("html")); // update html when css is updated
  // ===watch php===
  gulp.watch("src/php/*.php", gulp.series("php"));
  // ===watch audio===
  gulp.watch("src/audio/*", gulp.series("audio"));
  gulp.watch("src/audio/an-ella-fitzgerald-tribute/*", gulp.series("audio"));
  cb();
}

exports.default = defaultTask;
