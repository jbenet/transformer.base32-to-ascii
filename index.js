var transformer = require('dat-transformer');
var tBase32 = transformer('base32');
var tAscii = transformer('ascii');
// require any other modules you may need here.
var base32 = require('base32');

module.exports = transformer.Conversion(tBase32, tAscii, convert);

function convert(input) {
  return base32.decode(input);
}
