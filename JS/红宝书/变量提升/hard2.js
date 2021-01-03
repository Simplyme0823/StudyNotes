/** @format */

console.log(a, window.a);
{
  // function a() {}  undefined
  console.log(a, window.a);
  function a() {}
  // function a() {} function a() {}
  console.log(a, window.a);
}
// function a() {} function a() {}
console.log(a, window.a);
