/* eslint-disable */
const gulp = require('gulp');
const $ = require('gulp-load-plugins')({ lazy: true });

const webpack = require('webpack-stream');
const path = require('path');
const browserSync = require('browser-sync');

gulp.task('styles', function () {
  return gulp
    .src( './src/sass/*.scss' )
    .pipe( $.sass().on( 'error', $.sass.logError ) )
    .pipe( $.autoprefixer( 'last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4' ) )
    .pipe( $.cleanCss() )
    .pipe( gulp.dest( 'public/css' ) )
    .pipe( browserSync.reload( {stream: true} ) );
} );

gulp.task('vendorScripts', function() {
  gulp.src('./src/js/vendor/**/*.js')
      .pipe(gulp.dest('public/js/vendor'));
});

gulp.task( 'scripts', function () {
  return gulp
    .src( [
      './src/js/!(vendor)**/!(app)*.js',
      './src/js/app.js'
    ] )
    .pipe( $.plumber() )
    .pipe(webpack())
    .pipe( $.babel({
		presets: ['env']
	}) )
    .pipe( $.concat( 'app.js' ) )
    .pipe( $.uglify() )
    .pipe( gulp.dest( 'public/js' ) )
    .pipe( browserSync.reload( {stream: true} ) );
} );

// Optimizes the images that exists
gulp.task( 'images', function () {
  return gulp
    .src( 'src/imgs/**' )
    .pipe( $.changed( 'imgs' ) )
    .pipe( $.imagemin( {
      progressive: true,
      interlaced: true,
      optimizationLevel: 5,
      svgoPlugins: [{
        removeViewBox: true
      }]
    } ) )
    .pipe( gulp.dest( 'public/imgs' ) )
    .pipe( $.size( {title: 'images'} ) );
} );

gulp.task( 'html', function () {
  return gulp
    .src( 'src/*.html' )
	.pipe($.htmlmin({collapseWhitespace: true}))
    .pipe( gulp.dest( './' ) )
} );

gulp.task( 'browser-sync', ['styles', 'scripts'], function () {
  browserSync( {
    server: {
      baseDir: "./",
      injectChanges: true // this is new
    }
  } );
} );

gulp.task( 'watch', function () {
  // Watch .html files
  gulp.watch( '*.html', ['html', browserSync.reload] );
  gulp.watch( "*.html" ).on( 'change', browserSync.reload );
  // Watch .sass files
  gulp.watch( 'src/sass/**/*.scss', ['styles', browserSync.reload] );
  // Watch .js files
  gulp.watch( 'src/js/*.js', ['scripts', browserSync.reload] );
  // Watch .js files
  gulp.watch( 'src/js/vendor/*', ['vendorScripts', browserSync.reload] );
  // Watch image files
  gulp.watch( 'src/images/**/*', ['images', browserSync.reload] );
} );

gulp.task( 'default', function () {
  gulp.start(
    'styles',
    'vendorScripts',
    'scripts',
    'images',
    'html',
    'browser-sync',
    'watch'
  );
} );
