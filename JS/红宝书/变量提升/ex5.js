/** @format */

console.log(foo);
foo(); // undefined 12
var foo = 10;
// foo(); // 报错
console.log(foo); // 10
function foo() {
  var a;
  console.log(a);
  a = 12;
  console.log(a);
}
console.log(foo); // 10
