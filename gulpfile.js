//reqire
var gulp = require('gulp');

// var htmlmin = require('gulp-htmlmin');
var jade = require('gulp-jade');

var sass = require('gulp-sass');
var prefix = require('gulp-autoprefixer');

var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

var imagemin = require('gulp-imagemin');

var connect = require('gulp-connect-multi')();

//------------HTML----------------
//----------if HTNL run this----
// gulp.task('templates', function() {
//   return gulp.src('./dev/*.html')
//     .pipe(htmlmin({collapseWhitespace: true}))
//     .pipe(gulp.dest('./docs'))
//     .pipe(connect.reload())
// });
//--------if JADE run this
gulp.task('templates', function() {
  var YOUR_LOCALS = {};
 
  gulp.src('./dev/*.jade')
    .pipe(jade({
      locals: YOUR_LOCALS
      // pretty: true
    }))
    .pipe(gulp.dest('./docs/'))
    .pipe(connect.reload())
});

//sass to cscc
gulp.task('styles', function () {
  return gulp.src('./dev/scss/style.scss')
    .pipe(prefix('last 5 versions'))
    .pipe(sass({
    	outputStyle: 'compressed'
    }))
    .pipe(gulp.dest('./docs/assets/'))
    .pipe(connect.reload())
});

//js minify and uglify
gulp.task('scripts', function(){
	return gulp.src('./dev/js/*.js')
	.pipe(concat('script.js'))
	.pipe(uglify())
	.pipe(gulp.dest('./docs/assets'))
	.pipe(connect.reload())
});

//image min
gulp.task('imagemin', function(){
	return gulp.src('./dev/images/*')
	.pipe(imagemin())
	.pipe(gulp.dest('./docs/images/'))
	.pipe(connect.reload())
});

//watch
gulp.task('watch', function(){
	// gulp.watch('./dev/*.html', ['templates'])
	gulp.watch('./dev/*.jade', ['templates'])
	gulp.watch('./dev/jade/**/*.jade', ['templates'])
	gulp.watch('./dev/scss/style.scss', ['styles'])
	gulp.watch('./dev/scss/**/*.scss', ['styles'])
	gulp.watch('./dev/scss/import/**/*.scss', ['styles'])
	gulp.watch('./dev/js/*.js', ['scripts'])
	gulp.watch('./dev/images/*', ['imagemin'])
});

//connect
gulp.task('connect', connect.server({
	host: '127.0.0.1',
	root: ['docs'],
	port: 9090,
	livereload: true
}));


//run gulp
gulp.task('default', ['templates', 'styles', 'scripts', 'imagemin']);
gulp.task('dev', ['default', 'connect', 'watch']);




