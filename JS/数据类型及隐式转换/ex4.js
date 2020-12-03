/** @format */

const c = {
  toString() {
    return 101;
  },
  valueOf() {
    return;
  },
};
// 先使用toString再使用valueOf
console.log(String(c), typeof String(c)); // 101 string
// 先使用valueOf再使用toString
console.log(Number(c), typeof Number(c)); // NaN number
