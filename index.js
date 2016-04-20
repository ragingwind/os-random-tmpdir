'use strict';

const path = require('path');
const hasha = require('hasha');
const tmpdir = require('os-tmpdir');
const now = require("performance-now");

module.exports = prefix => {
	return path.join(tmpdir(), prefix || '', hasha(now().toString(), {algorithm: 'md5'}));
};
