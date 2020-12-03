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
