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
var inline = require('rework-inline');

gulp.task('default', function () {
	gulp.src('src/app.styl')
		.pipe(styl(inline(), { whitespace: true }))
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

MIT © [Sindre Sorhus](http://sindresorhus.com)
