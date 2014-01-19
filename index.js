'use strict';
var gutil = require('gulp-util');
var through = require('through2');
var styl = require('styl');

module.exports = function (options) {
	return through.obj(function (file, enc, cb) {
		if (file.isNull()) {
			this.push(file);
			return cb();
		}

		if (file.isStream()) {
			this.emit('error', new gutil.PluginError('gulp-styl', 'Streaming not supported'));
			return cb();
		}

		try {
			file.contents = new Buffer(styl(file.contents.toString(), options).toString());
			file.path = gutil.replaceExtension(file.path, '.css');
		} catch (err) {
			this.emit('error', new gutil.PluginError('gulp-styl', err));
		}

		this.push(file);
		cb();
	});
};
