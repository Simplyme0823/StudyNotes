/** @format */

var a = 0; // window.a = 0
if (true) {
  a = 1;
  function a() {}
  a = 21;
  console.log(a); // 21
}
console.log(a); // 1

// https://blog.csdn.net/qq_35895679/article/details/105904369
