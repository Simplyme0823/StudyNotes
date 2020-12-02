/** @format */

let a;
console.log(a); // undefined
// 但是在ES6中，函数可以在块级作用域中声明
{
  console.log(a); // function a(){ console.log(1111) }
  a = 1;
  console.log(a); // 1
  function a() {
    console.log("hello");
  }
  console.log(a); // 1
  a = 2;
  console.log(a); // 2
  function a() {
    console.log("1111");
  }
  console.log(a); // 2
  a = 3;
  console.log(a); // 3
  a = 4;
  console.log(a); // 4
}

// 如果是let a  那么此时 a 为 undefined
console.log(a); // 2
