#!/usr/bin/env node
var transformer = require('dat-transformer');
var conv = require('./');

// run stock conversion tests, and try expected input/output pairs
var test = transformer.test.conversion(conv, [
  // [input, expectedOutput]
  ['c9jpaw10c9qpyw0', 'beep boop']
])


// that should be enough, but you can also run your own tests:
/*

test('your test description', function (t) {
  YOUR TEST CODE HERE
  // test conversions this way:
  test.converts(t, conv, input, expectedOutput)
  t.end();
});

*/
