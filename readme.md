# [gulp](https://github.com/wearefractal/gulp)-styl [![Build Status](https://secure.travis-ci.org/sindresorhus/gulp-styl.png?branch=master)](http://travis-ci.org/sindresorhus/gulp-styl)

> Preprocess CSS with [Styl](https://github.com/visionmedia/styl)

*Issues with the output should be reported on the [Styl issue tracker](https://github.com/visionmedia/styl/issues).*


## Install

Install with [npm](https://npmjs.org/package/gulp-styl)

```
npm install --save-dev gulp-styl
```


## Example

```js
var gulp = require('gulp');
var styl = require('gulp-styl');

gulp.task('default', function () {
	gulp.src('src/app.css')
		.pipe(styl())
		.pipe(gulp.dest('dist/app.css'));
});
```


## API

The `compress` option from Styl is intentionally missing. A separate task like [gulp-csso](https://github.com/ben-eb/gulp-csso) will do a much better job.

### styl(options)

#### options.whitespace

Type: `Boolean`  
Default: `false`

Utilize CSS [whitespace transformations](https://github.com/visionmedia/styl#whitespace-significant-syntax).


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
