const gulp     = require('gulp'),
	  sass     = require('gulp-sass'),
	  plumber  = require('gulp-plumber'),
	  uglify   = require('gulp-uglify');

//Function Scripts task compressed !
gulp.task('compress', function() {
	// Console.log('task runner working todo :) !!');
	function handleError(name){
		return function (error){
			console.error('Error from '+ name + 'in compress task !', err.toString());
		};
	}

	return gulp.src('frontend/js/*.js')
	.pipe(plumber())
	.pipe(uglify())
	.pipe(gulp.dest('frontend/dist/js'))
	.on('error',function(){
		console.error('Error in compress task', err.toString());
	});
});

//Function Style's Compressed !
gulp.task('compres-styles', function(){
	console.log('run stlyes was here !!');

});

//Function Watching JS 
gulp.task('watch-js',function(){
	console.log('watching files JS !!');
	gulp.watch('dist/js');
});

//Function Watching JS 
gulp.task('watch-style',function(){
	console.log('watching files Style !!');
});