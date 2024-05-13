'use strict';

const monitor = require('..');
const assert = require('assert').strict;

assert.strictEqual(monitor(), 'Hello from monitor');
console.info('monitor tests passed');
