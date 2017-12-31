'use strict';
const _ = require('lodash');
const through = require('through2');
const styl = require('styl');
const PluginError = require('plugin-error');

const lastIsObject = _.flowRight(_.isPlainObject, _.last);

module.exports = function () {
	const args = [].slice.call(arguments);
	const opts = lastIsObject(args) ? args.pop() : {};
	const plugins = args;

	return through.obj(function (file, enc, cb) {
		if (file.isNull()) {
			cb(null, file);
			return;
		}

		if (file.isStream()) {
			cb(new PluginError('gulp-styl', 'Streaming not supported'));
			return;
		}

		const filePath = file.path;

		try {
			const ret = styl(file.contents.toString(), opts);
			plugins.forEach(ret.use.bind(ret));
			file.contents = Buffer.from(ret.toString());
			file.extname = '.css';
			this.push(file);
		} catch (err) {
			this.emit('error', new PluginError('gulp-styl', err, {fileName: filePath}));
		}

		cb();
	});
};
