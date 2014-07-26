'use strict';
var _ = require('lodash');
var gutil = require('gulp-util');
var through = require('through2');
var styl = require('styl');
var lastIsObject = _.compose(_.isPlainObject, _.last);

module.exports = function () {
	var args = [].slice.call(arguments);
	var options = lastIsObject(args) ? args.pop() : {};
	var plugins = args;

	return through.obj(function (file, enc, cb) {
		if (file.isNull()) {
			this.push(file);
			return cb();
		}

		if (file.isStream()) {
			this.emit('error', new gutil.PluginError('gulp-styl', 'Streaming not supported'));
			return cb();
		}

		var filePath = file.path;

		try {
			var ret = styl(file.contents.toString(), options);
			plugins.forEach(ret.use.bind(ret));
			file.contents = new Buffer(ret.toString());
			file.path = gutil.replaceExtension(file.path, '.css');
		} catch (err) {
			this.emit('error', new gutil.PluginError('gulp-styl', err, {fileName: filePath}));
		}

		this.push(file);
		cb();
	});
};
