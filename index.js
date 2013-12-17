'use strict';
var es = require('event-stream');
var styl = require('styl');

module.exports = function (options) {
	return es.map(function (file, cb) {
		file.contents = new Buffer(styl(String(file.contents), options).toString());
		cb(null, file);
	});
};
