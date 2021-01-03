/** @format */

function A() {
  console.log("A");
}

function B() {
  console.log("B");
}

function C() {
  console.log("C");
}

// A C B
// A();
// process.nextTick(B); // 本次tick最后执行
// C();

// A C B
A();
setImmediate(B); // nextTick最后执行
C();
