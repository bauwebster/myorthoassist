// Declaration
var gulp = require('gulp');
var robots = require('gulp-robots');
var googleWebFonts = require('gulp-google-webfonts');

/* Download Google fonts to local app.
   Source: https://www.npmjs.com/package/gulp-google-webfonts */
var options = {};
gulp.task('google_fonts', function () {
  return gulp.src('./fonts.list')
  	.pipe(googleWebFonts(options))
  	.pipe(gulp.dest('dist/fonts/vendor'));
});

/* Generate robots.txt file.
   Source: https://www.npmjs.com/package/gulp-robots */
gulp.task('robots_file', function () {
  gulp.src('dist/index.html')
    .pipe(robots({
      useragent: '*',
      // allow: ['folder1/', 'folder2/'],
      disallow: ['cgi-bin/']
    }))
    .pipe(gulp.dest('dist'));
});

// Default
gulp.task('default', [ 'robots_file', 'google_fonts']);
