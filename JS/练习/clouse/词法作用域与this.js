/** @format */

var fn = null;
const foo = () => {
  var a = 2;
  // 词法作用域
  function innerFoo() {
    // ReferenceError: c is not defined
    // console.log(c);
    console.log(a);
  }
  fn = innerFoo;
};

const bar = () => {
  var c = 100;
  fn();
};

foo();
bar();

function test() {
  const a = "a";

  return function () {
    console.log(this);
    console.log(a);
  };
}

const test2 = test();
function test1() {
  test2();
}
test1(); // 2
