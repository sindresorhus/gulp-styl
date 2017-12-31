/* eslint-env mocha */
'use strict';
const assert = require('assert');
const calc = require('rework-calc');
const Vinyl = require('vinyl');
const styl = require('.');

it('should preprocess CSS using Styl', cb => {
	const stream = styl();

	stream.on('data', file => {
		assert.equal(file.path, '~/dev/gulp-styl/test/file.css');
		assert.equal(file.relative, 'file.css');
		assert.equal(file.contents.toString(), '#test {\n  width: 50px;\n  height: 50px;\n}');
		cb();
	});

	stream.end(new Vinyl({
		base: '~/dev/gulp-styl/test',
		path: '~/dev/gulp-styl/test/file.styl',
		contents: Buffer.from('#test{width:50px;height:@width;}')
	}));
});

it('should support using plugins', cb => {
	const stream = styl(calc);

	stream.on('data', file => {
		assert.equal(file.path, '~/dev/gulp-styl/test/file.css');
		assert.equal(file.relative, 'file.css');
		assert.equal(file.contents.toString(), '#test {\n  width: 50px;\n  height: 50px;\n}');
		cb();
	});

	stream.end(new Vinyl({
		base: '~/dev/gulp-styl/test',
		path: '~/dev/gulp-styl/test/file.styl',
		contents: Buffer.from('#test{width:calc(25px + 25px);height:@width;}')
	}));
});
