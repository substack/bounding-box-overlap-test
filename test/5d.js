var overlap = require('../')
var test = require('tape')

test('5d', function (t) {
  var a = [ [3,8], [-15,-11], [100,110], [8,22], [400,402] ]
  var b = [ [1,5], [-12,-5], [80,140], [0,10], [380,400] ]
  var c = [ [-4,6], [-10,0], [70,90], [-20,30], [381,399] ]
  t.equal(overlap(a, b), true)
  t.equal(overlap(a, c), false)
  t.equal(overlap(b, c), true)
  t.end()
})
