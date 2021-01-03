/** @format */

function test() {
  const a = "a";
  return function () {
    console.log(this); // window
    console.log(a); //2
  };
}

const test2 = test();
function test1() {
  test2();
}

test1();
