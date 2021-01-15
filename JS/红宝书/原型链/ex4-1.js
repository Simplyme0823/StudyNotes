/** @format */

function test() {
  // test{}
  console.log(this);
}
// new的本质？
const res = new test();

function myNew(fn) {
  const obj = {};
  obj.__proto__ = fn.prototype;
  const res = fn.apply(obj);
  return typeof res === "object" && res !== null ? res : obj;
}
