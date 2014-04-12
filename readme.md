# [gulp](http://gulpjs.com)-styl [![Build Status](https://travis-ci.org/sindresorhus/gulp-styl.svg?branch=master)](https://travis-ci.org/sindresorhus/gulp-styl)

> Preprocess CSS with [Styl](https://github.com/visionmedia/styl)

*Issues with the output should be reported on the [Styl issue tracker](https://github.com/visionmedia/styl/issues).*


## Install

```bash
$ npm install --save-dev gulp-styl
```


## Usage

```js
var gulp = require('gulp');
var styl = require('gulp-styl');
var inline = require('rework-inline');

gulp.task('default', function () {
	return gulp.src('src/app.css')
		.pipe(styl(inline()))
		.pipe(gulp.dest('dist'));
});
```


## API

The `compress` option from Styl is intentionally missing. A separate task like [gulp-csso](https://github.com/ben-eb/gulp-csso) will do a much better job.

### styl(plugin, plugin, ..., options)

Plugins are supplied as arguments.
Optionally supply an object with options as the last argument.

#### options.whitespace

Type: `Boolean`  
Default: `false`

Utilize CSS [whitespace transformations](https://github.com/visionmedia/styl#whitespace-significant-syntax).


## License

[MIT](http://opensource.org/licenses/MIT) © [Sindre Sorhus](http://sindresorhus.com)
