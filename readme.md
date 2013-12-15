# [gulp](https://github.com/wearefractal/gulp)-styl [![Build Status](https://secure.travis-ci.org/sindresorhus/gulp-styl.png?branch=master)](http://travis-ci.org/sindresorhus/gulp-styl)

> Preprocess CSS with [Styl](https://github.com/visionmedia/styl)

*Issues with the output should be reported on the [Styl repo](https://github.com/visionmedia/styl/issues).*


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
		.pipe(styl({compress: true}))
		.pipe(gulp.dest('dist/app.css'));
});
```


## API

### styl(options)

#### options.compress

Type: `Boolean`  
Default: `false`

Compress the output.

#### options.whitespace

Type: `Boolean`  
Default: `false`

Utilize CSS whitespace transformations.


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
