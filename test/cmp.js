var overlap = require('../')
var test = require('tape')

test('cmp', function (t) {
  var a = [
    [Buffer('c'),Buffer('h')],
    [Buffer('k'),Buffer('q')],
    [Buffer('ma'),Buffer('md')]
  ]
  var b = [
    [Buffer('a'),Buffer('e')],
    [Buffer('d'),Buffer('m')],
    [Buffer('kq'),Buffer('mz')]
  ]
  var c = [
    [Buffer('!'),Buffer('f')],
    [Buffer('b'),Buffer('l')],
    [Buffer('kd'),Buffer('kz')]
  ]
  var cmp = [
    function (a, b) { return a < b ? -1 : a > b ? 1 : 0 },
    function (a, b) { return Buffer.compare(a, b) },
    function (a, b) { return a < b ? -1 : a > b ? 1 : 0 }
  ]
  t.equal(overlap(a, b, { cmp: cmp }), true)
  t.equal(overlap(a, c, { cmp: cmp }), false)
  t.equal(overlap(b, c, { cmp: cmp }), true)
  t.end()
})

test('array cmp', function (t) {
  var a = [ [3,8], [Buffer('k'),Buffer('q')], [100,110] ]
  var b = [ [1,5], [Buffer('d'),Buffer('m')], [80,140] ]
  var c = [ [-4,6], [Buffer('b'),Buffer('l')], [70,90] ]
  var cmp = [
    function (a, b) { return a < b ? -1 : a > b ? 1 : 0 },
    function (a, b) { return Buffer.compare(a, b) },
    function (a, b) { return a < b ? -1 : a > b ? 1 : 0 }
  ]
  t.equal(overlap(a, b, { cmp: cmp }), true)
  t.equal(overlap(a, c, { cmp: cmp }), false)
  t.equal(overlap(b, c, { cmp: cmp }), true)
  t.end()
})
