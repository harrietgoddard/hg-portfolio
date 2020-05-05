const gulp = require('gulp');
let htmlmin = require('gulp-htmlmin');
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');
const sass = require('gulp-sass');
const uglify = require('gulp-uglify-es').default;
const concat = require('gulp-concat');

/**
 * HTML
 */
//minify HTML from src/ to dist/ for publishing
gulp.task('html-min', () => {
    return gulp.src('src/*.html')
      .pipe(htmlmin({ collapseWhitespace: true }))
      .pipe(gulp.dest('dist'));
  });

//HTML watcher
gulp.task('watch-html', () => {
	return gulp.watch('src/*.html', gulp.task('html-min'));
});

/**
 * STYLES
 */
//minify CSS from src/css/styles.css to dist/css/
gulp.task('minify-css', () => {
	return gulp.src('src/css/style.css')
		.pipe(cleanCSS({ compatibility: 'ie8' }))
		.pipe(gulp.dest('dist/css/'));
});

// compile sass from src/scss/ to src/css/style.css
gulp.task('sass', () => {
	return gulp.src('src/scss/main.scss')
		.pipe(sass())
		.pipe(rename('style.css'))
		.pipe(gulp.dest('./src/css/'));
});

gulp.task('styles', gulp.series('sass', 'minify-css'));

//styles watcher
gulp.task('watch-css', () => {
	return gulp.watch('src/scss/*.scss', gulp.task('styles'));
});

/**
 * SCRIPTS
 * The order of these scripts is important
 * because they depend on each other.
 */
const scripts = [
	'js/jquery-3.3.1.slim.js',
	'js/popper.js',
	'js/bootstrap.js',
];

//minify JS
gulp.task('scripts', () => {
	return gulp.src('src/js/scripts.js')
		// .pipe(concat('main.js'))
		.pipe(uglify())
		.pipe(gulp.dest('dist/js'))
});

//scripts watcher
gulp.task('watch-js', () => {
	return gulp.watch('src/js/*.js', gulp.task('scripts'));
});

/**
 * DEFAULT
 * run 'gulp' in the terminal to run this task
 */
gulp.task('default', gulp.parallel('watch-html', 'watch-css', 'watch-js'));