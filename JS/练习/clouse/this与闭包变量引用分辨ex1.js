/** @format */

var fn = null;

const foo = () => {
  var a = 2;
  // 词法作用域
  function innerFoo() {
    console.log(a); // 2 闭包
    console.log(this); //window
  }
  fn = innerFoo;

  // ReferenceError: c is not defined
  console.log(c);
};

const bar = () => {
  var c = 100;
  // window.a=== ?
  fn();
};

foo();
bar(); //2
