/**
 * Module dependencies
 */

var assert = require('assert');
var regex = require('./');

/**
 * Test
 */

describe('email regex', function() {
  it('should match email input', function() {
    assert.equal(regex.test('tobi@vision.com'), true);
    assert.equal(regex.test('tobi+ferret@vision.com'), true);
    assert.equal(regex.test('t.obi+_ferret@vision.com'), true);
  });

  it('should catch incorrect input', function() {
    assert.equal(regex.test('*(*(*()))'), false);
    assert.equal(regex.test('foobar@@hello.com'), false);
    assert.equal(regex.test('lol@hi.c'), false);
  });
});
