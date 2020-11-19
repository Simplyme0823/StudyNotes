/** @format */

var a = 10;
(function () {
  console.log(a);
  a = 5;
  console.log(global.a);
  var a = 20;
  console.log(a);
})();
