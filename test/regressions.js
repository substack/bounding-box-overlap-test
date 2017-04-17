var overlap = require('../')
var test = require('tape')

test('silent failure if string', function (t) {
  var a1 = [ ['1','5'], ['1','5'] ]
  var a2 = [ [1, 5], [1, 5] ]
  var b = [ [0, 1], [0, 5] ]
  t.equal(overlap(a1, b), true)
  t.equal(overlap(a2, b), true)
  t.end()
})
