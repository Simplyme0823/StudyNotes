/** @format */

var c = 1;
function c(c) {
  console.log(c);
  var c = 3;
}
//1
console.log(c);
//TypeError: c is not a function
c(2);

// 上方相当于

function c(c) {
  console.log(c);
  var c = 3;
}
var c;

c = 1;
console.log(c);
c(2);
