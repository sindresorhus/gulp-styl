'use strict';
var assert = require('assert');
var gutil = require('gulp-util');
var styl = require('./index');

it('should preprocess CSS using Styl', function (cb) {
	var stream = styl({compress: true});

	stream.on('data', function (data) {
		assert.equal(String(data.contents), '#test{width:50px;height:50px;}');
		cb();
	});

	stream.write(new gutil.File({contents: '#test{width:50px;height:@width;}'}));
});
