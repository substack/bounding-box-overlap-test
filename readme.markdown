# bounding-box-overlap-test

test if two n-dimensional bounding boxes overlap

# example

``` js
var overlap = require('bounding-box-overlap-test')
var a = [ [3,8], [-15,-11], [100,110] ]
var b = [ [1,5], [-12,-5], [80,140] ]
var c = [ [-4,6], [-10,0], [70,90] ]
console.log(overlap(a, b)) // true
console.log(overlap(a, c)) // false
console.log(overlap(b, c)) // true
```

# api

``` js
var overlap = require('bounding-box-overlap-test')
```

## overlap(a, b, opts={})

Return whether the bounding box `a` intersects the bounding box `b`.

Bounding boxes are arrays of 2-element `[min,max]` array pairs, one for each
coordinate.

* `opts.cmp(a, b)` - provide your own custom comparison function or array of
comparison functions

Comparison functions should return `-1`, `0`, or `1` for less than, equal to,
and greater than cases, respectively.

If `opts.cmp` is an array, each item in the array should be a comparison
function for the respective dimension.

# install

```
npm install bounding-box-overlap-test
```

# license

BSD
