var overlap = require('../')
var a = [ [3,8], [-15,-11], [100,110] ]
var b = [ [1,5], [-12,-5], [80,140] ]
var c = [ [-4,6], [-10,0], [70,90] ]
console.log(overlap(a, b)) // true
console.log(overlap(a, c)) // false
console.log(overlap(b, c)) // true
