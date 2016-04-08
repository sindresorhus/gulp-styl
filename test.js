'use strict';
/* eslint-env mocha */
var assert = require('assert');
var calc = require('rework-calc');
var gutil = require('gulp-util');
var styl = require('./');

it('should preprocess CSS using Styl', function (cb) {
	var stream = styl();

	stream.on('data', function (file) {
		assert.equal(file.path, '~/dev/gulp-styl/test/file.css');
		assert.equal(file.relative, 'file.css');
		assert.equal(file.contents.toString(), '#test {\n  width: 50px;\n  height: 50px;\n}');
		cb();
	});

	stream.write(new gutil.File({
		base: '~/dev/gulp-styl/test',
		path: '~/dev/gulp-styl/test/file.styl',
		contents: new Buffer('#test{width:50px;height:@width;}')
	}));
});

it('should support using plugins', function (cb) {
	var stream = styl(calc);

	stream.on('data', function (file) {
		assert.equal(file.path, '~/dev/gulp-styl/test/file.css');
		assert.equal(file.relative, 'file.css');
		assert.equal(file.contents.toString(), '#test {\n  width: 50px;\n  height: 50px;\n}');
		cb();
	});

	stream.write(new gutil.File({
		base: '~/dev/gulp-styl/test',
		path: '~/dev/gulp-styl/test/file.styl',
		contents: new Buffer('#test{width:calc(25px + 25px);height:@width;}')
	}));
});
