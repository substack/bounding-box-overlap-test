module.exports = function (a, b, opts) {
  if (!opts) opts = {}
  if (!opts.cmp) opts.cmp = defaultCmp

  if (Array.isArray(opts.cmp)) {
    for (var i = 0; i < a.length; i++) {
      if (!overlapping(opts.cmp[i], a[i], b[i])) return false
    }
  } else {
    for (var i = 0; i < a.length; i++) {
      if (!overlapping(opts.cmp, a[i], b[i])) return false
    }
  }
  return true
}

function overlapping (cmp, a, b) {
  return (gte(cmp(a[0], b[0])) && lte(cmp(a[0], b[1])))
    || (gte(cmp(a[1], b[0])) && lte(cmp(a[1], b[1])))
    || (lt(cmp(a[0], b[0])) && gt(cmp((a[1], b[1]))))
}

function gte (n) { return n >= 0 }
function lte (n) { return n <= 0 }
function gt (n) { return n > 0 }
function lt (n) { return n < 0 }

function defaultCmp (a, b) {
  if (a < b) return -1
  else if (a > b) return 1
  else if (a === b) return 0
}
