/** @format */

function gen(n) {
  let res = [];
  loop("", n, n);
  function loop(str, left, right) {
    if (str.length === n * 2) {
      return res.push(str);
    }
    if (left > 0) {
      loop(str + "(", left - 1, right);
    }
    if (left < right) {
      loop(str + ")", left, right - 1);
    }
  }
  return res;
}
const res = gen(3);
console.log(res);
