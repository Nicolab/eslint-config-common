'use strict';

var config = require('../');
var configStandart = require('eslint-config-standard');
var test = require('tape');

test('test basic properties of config', function (t) {
  t.ok(isObject(configStandart.parserOptions));
  t.ok(isObject(config.env));
  t.ok(isObject(config.globals));
  t.ok(isObject(config.rules));
  t.end();
})

function isObject (obj) {
  return typeof obj === 'object' && obj !== null;
}
