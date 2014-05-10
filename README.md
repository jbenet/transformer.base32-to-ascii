# transformer.base32-to-ascii

[Transformer](http://github.com/jbenet/transformer) conversion: base32 to ascii

This module is a transformer conversion, published on npm. Read more about transformer at:

- the transformer website: <http://transform.datadex.io>
- the transformer repository: <http://github.com/jbenet/transformer>

## Usage

Use this module through transformer.


### Commandline

```
> echo 'c9jpaw10c9qpyw0' | transform base32 ascii
'beep boop'
```

### Javascript

```js
var transformer = require('dat-transformer');
var tBase32ToAscii = transformer('base32', 'ascii');
tBase32ToAscii('c9jpaw10c9qpyw0'); // 'beep boop'
```
