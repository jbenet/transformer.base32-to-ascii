var Conversion = require('transformer-conversion');
var tBase32 = require('transformer.base32');
var tAscii = require('transformer.ascii');
// require any other modules you may need here.
var base32 = require('base32');

module.exports = Conversion(tBase32, tAscii, convert);

function convert(input) {
  return base32.decode(input);
}
