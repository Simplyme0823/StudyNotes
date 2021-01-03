/** @format */

var a = 10;
(function () {
  console.log(a); // undefined
  a = 5;
  console.log(a); // 5
  var a = 20;
  console.log(a); // 20
})();
