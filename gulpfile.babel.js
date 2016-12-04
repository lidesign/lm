/**
 * External dependencies
 */
import gulp from 'gulp';
import refresh from 'gulp-refresh';
import sass from 'gulp-sass';
import sourcemaps from 'gulp-sourcemaps';

gulp.task('sass', () => gulp.src('./sass/**/*.scss')
  .pipe(sourcemaps.init())
  .pipe(sass().on('error', sass.logError))
  .pipe(sourcemaps.write())
  .pipe(gulp.dest('./assets/css'))
  .pipe(refresh()));

gulp.task('sass:watch', () => {
  refresh.listen();

  gulp.watch('./sass/**/*.scss', ['sass']);
});
