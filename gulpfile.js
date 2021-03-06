var gulp = require('gulp'),
	less = require('gulp-less'),
	autoprefixer = require('autoprefixer'),
	postcss = require('gulp-postcss'),
	sourcemaps = require('gulp-sourcemaps'),
	notify = require('gulp-notify'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglifyjs'),
	imagemin = require('gulp-imagemin'),
	spritesmith = require('gulp.spritesmith'),
	del = require('del'),
	csso = require('gulp-csso'),
	browserSync = require('browser-sync');

// Less
gulp.task('less', function () {
	return gulp.src('assets/less/[^_]*.less')
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

// Sprite
gulp.task('sprite', function () {
	var spriteData =
		gulp.src('assets/img/sprite/*.*')
			.pipe(spritesmith({
				imgName: 'sprite.png',
				imgPath: '../img/footer/sprite.png',
				cssName: '_sprite.less',
				padding: 10,
				cssFormat: 'less',
				algorithm: 'binary-tree'
			}));
	spriteData.img.pipe(gulp.dest('assets/img/footer/'));
	spriteData.css.pipe(gulp.dest('assets/less/'));
});

// JS
gulp.task('js', function () {
	return gulp.src([
		'assets/libs/perfect/perfect.js',
		'assets/libs/jcolumn/jcolumn.jquery.min.js',
		'assets/js/custom.js'
	])
		.pipe(concat('main.js'))
		.pipe(gulp.dest('assets/js/'))
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
	gulp.watch('assets/js/*.js', ['js']).on('change', browserSync.reload);
});

// Clean folder 'dist'
gulp.task('clean', function () {
	return del.sync('dist')
});

// Build
gulp.task('build', ['clean'], function () {
	//html
	var buildHtml = gulp.src([
		'assets/customers.html',
		'assets/partners.html'
	])
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
	var buildCss = gulp.src([
		'assets/css/customers.css',
		'assets/css/partners.css'
	])
		.pipe(csso())
		.pipe(gulp.dest('dist/css'));
	//js
	var buildJs = gulp.src('assets/js/main.js')
		.pipe(uglify())
		.pipe(gulp.dest('dist/js'));
	//images
	var buildImage = gulp.src(['!assets/img/sprite/**/*', 'assets/img/**/*'])
		.pipe(imagemin({
			interlaced: true, //gif
			progressive: true, //jpg
			optimizationLevel: 5, //png
			svgoPlugins: [{removeViewBox: false}] //svg
		}))
		.pipe(gulp.dest('dist/img'));
});

// Default таск
gulp.task('default', ['less', 'js', 'watch']);