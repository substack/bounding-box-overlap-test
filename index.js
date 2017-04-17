module.exports = function (a, b, opts) {
  if (!opts) opts = {}
  var cmp = opts.cmp || defaultCmp

  if (Array.isArray(cmp)) {
    for (var i = 0; i < a.length; i++) {
      if (!overlapping(cmp[i], a[i], b[i])) return false
    }
  } else {
    for (var i = 0; i < a.length; i++) {
      if (!overlapping(cmp, a[i], b[i])) return false
    }
  }
  return true
}

function overlapping (cmp, a, b) {
  var a0b0 = cmp(a[0], b[0])
  var a0b1 = cmp(a[0], b[1])
  if (gte(a0b0) && lte(a0b1)) return true
  var a1b0 = cmp(a[1], b[0])
  var a1b1 = cmp(a[1], b[1])
  if (gte(a1b0) && lte(a1b1)) return true
  return lt(a0b0) && gt(a1b1)
}

function gte (n) { return n >= 0 }
function lte (n) { return n <= 0 }
function gt (n) { return n > 0 }
function lt (n) { return n < 0 }

function defaultCmp (a, b) {
  if (a < b) return -1
  else if (a > b) return 1
  else return 0
}
