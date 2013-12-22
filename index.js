'use strict';
var es = require('event-stream');
var styl = require('styl');
var gutil = require('gulp-util');

module.exports = function (options) {
	return es.map(function (file, cb) {
		file.contents = new Buffer(styl(file.contents.toString(), options).toString());
		file.path = gutil.replaceExtension(file.path, '.css');
		cb(null, file);
	});
};
