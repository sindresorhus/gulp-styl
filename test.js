'use strict';
var assert = require('assert');
var gutil = require('gulp-util');
var styl = require('./index');

it('should preprocess CSS using Styl', function (cb) {
	var stream = styl({compress: true});

	stream.on('data', function (newFile) {
		assert.equal(newFile.path, '/home/gulp-styl/test/file.css');
		assert.equal(newFile.relative, 'file.css');
		assert.equal(String(newFile.contents), '#test{width:50px;height:50px;}');
		cb();
	});

	stream.write(new gutil.File({
		path: '/home/gulp-styl/test/file.styl',
		base: '/home/gulp-styl/test/',
		cwd: '/home/styl/',
		contents: '#test{width:50px;height:@width;}'
	}));
});
