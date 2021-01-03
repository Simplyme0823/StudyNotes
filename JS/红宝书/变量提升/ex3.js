/** @format */

var a = 0; // window.a = 0
if (true) {
  a = 1;
  function a() {}
  a = 21;
  console.log(a); // 21
}
console.log(a, window.a); // 1 1

// https://blog.csdn.net/qq_35895679/article/details/105904369
// 注：这里 a = 1 在 function a 执行完毕后才会生效
// 如果 function a 前面 没有赋值，那么 window.a就是function a
