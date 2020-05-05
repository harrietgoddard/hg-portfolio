const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');
const sass = require('gulp-sass');
const uglify = require('gulp-uglify-es').default;
const concat = require('gulp-concat');

/**
 * STYLES
 */
gulp.task('minify-css', () => {
	return gulp.src('css/styles.css')
		.pipe(cleanCSS({ compatibility: 'ie8' }))
		.pipe(rename({ suffix: '.min' }))
		.pipe(gulp.dest('./css/'));
});

// compile sass from src/scss/ to src/css/style.css
gulp.task('sass', () => {
	return gulp.src('src/scss/main.scss')
		.pipe(sass())
		.pipe(rename('style.css'))
		.pipe(gulp.dest('./src/css/'));
});

gulp.task('styles', gulp.series('sass', 'minify-css'));

gulp.task('watch-css', () => {
	return gulp.watch('scss/**/*.scss', gulp.task('styles'));
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

gulp.task('scripts', () => {
	return gulp.src(scripts)
		.pipe(concat('main.js'))
		.pipe(uglify())
		.pipe(gulp.dest('./js/'))
});

gulp.task('watch-js', () => {
	return gulp.watch(scripts, gulp.task('scripts'));
});

/**
 * DEFAULT
 * run 'gulp' in the terminal to run this task
 */
gulp.task('default', gulp.parallel('watch-css', 'watch-js'));