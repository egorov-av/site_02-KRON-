var gulp = require('gulp'),
	less = require('gulp-less'),
	autoprefixer = require('autoprefixer'),
	postcss = require('gulp-postcss'),
	sourcemaps = require('gulp-sourcemaps'),
	notify = require('gulp-notify'),
	uglify = require('gulp-uglifyjs'),
	imagemin = require('gulp-imagemin'),
	del = require('del'),
	csso = require('gulp-csso'),
	browserSync = require('browser-sync');

// Less
gulp.task('less', function () {
	return gulp.src('assets/less/main.less')
		.pipe(sourcemaps.init())
		.pipe(less())
		.on("error", notify.onError(function (error) {
			return "Message to the notifier: " + error.message;
		}))
		.pipe(postcss([autoprefixer('last 3 version')]))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('assets/css/'))
		.pipe(browserSync.reload({stream: true}))
});

// Browser-sync
gulp.task('browser-sync', function () {
	browserSync({
		server: {
			baseDir: 'assets'
		},
		notify: false,
		browser: ["chrome"]
	});
});

// Watcher
gulp.task('watch', ['browser-sync'], function () {
	gulp.watch('assets/less/**/*.less', ['less']);
	gulp.watch('assets/*.html').on('change', browserSync.reload);
	gulp.watch('assets/js/*.js').on('change', browserSync.reload);
});

// Clean folder 'dist'
gulp.task('clean', function () {
	return del.sync('dist')
});

// Build
gulp.task('build', ['clean'], function () {
	//html
	var buildHtml = gulp.src('assets/*.html')
		.pipe(gulp.dest('dist/'));
	//fonts
	var buildFonts = gulp.src('assets/fonts/**/*')
		.pipe(gulp.dest('dist/fonts'));
	//libs
	var buildLibs = gulp.src('assets/libs/**/*')
		.pipe(gulp.dest('dist/libs'));
	//less
	var buildLess = gulp.src('assets/less/*.less')
		.pipe(gulp.dest('dist/less'));
	//css
	var buildCss = gulp.src('assets/css/*.css')
		.pipe(csso())
		.pipe(gulp.dest('dist/css'));
	//js
	var buildJs = gulp.src('assets/js/main.js')
		.pipe(uglify())
		.pipe(gulp.dest('dist/js'));
	//images
	var buildImage = gulp.src('assets/img/**/*')
		.pipe(imagemin({
			interlaced: true, //gif
			progressive: true, //jpg
			optimizationLevel: 5, //png
			svgoPlugins: [{removeViewBox: false}] //svg
		}))
		.pipe(gulp.dest('dist/img'));
});

// Default таск
gulp.task('default', ['less', 'watch']);