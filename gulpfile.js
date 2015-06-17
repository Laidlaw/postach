// Include gulp
var gulp = require('gulp');

// Include Our Plugins
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var cssnext = require('gulp-cssnext');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
// var gulpBowerFiles = require('gulp-bower-files');

// Lint Task
gulp.task('lint', function() {
    return gulp.src('js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

// Compile Our Sass
gulp.task('sass', function() {
    return gulp.src('scss/*.scss')
        .pipe(sass())
        .pipe(cssnext({
          browsers: '> 1%, last 2 versions, Safari > 5, ie > 9, Firefox ESR',
          compress: true,
          url: false
        }))
        .pipe(gulp.dest('assets/css'));
});


// Concatenate & Minify JS
gulp.task('scripts', function() {
    return gulp.src([
            "bower_components/jquery/dist/jquery.js",
            "bower_components/metaquery/metaquery.jquery.js",
            "bower_components/snapjs/snap.min.js",
            // "bower_components/jquery.sidenotes/lib/jquery.sidenotes.js",
            // "bower_components/waypoints/lib/jquery.waypoints.js",
            // "bower_components/waypoints/lib/shortcuts/sticky.js",
            "js/*.js"

        ])
        .pipe(concat('all.js'))
        .pipe(gulp.dest('assets/js'))
        .pipe(rename('all.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('assets/js'));
});

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('js/*.js', ['lint', 'scripts']);
    gulp.watch('scss/*.scss', ['sass']);
});

// Default Task
gulp.task('default', ['lint', 'sass', 'scripts', 'watch']);
