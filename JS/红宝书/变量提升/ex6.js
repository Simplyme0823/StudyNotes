/** @format */

{
  function a() {}
  a = 50;
  // 50  function a(){}
  console.log(a, window.a);
}
// function a() {} function a() {}
console.log(a, window.a);

{
  b = 50;
  function b() {}
  // 50 50
  console.log(b, window.b);
}

// 50 50
console.log(b, window.b);
