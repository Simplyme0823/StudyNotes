/** @format */
const input = [1, [5], [2, [3, [4]]]];

function flat(arr, n) {
  while (arr.some(item => Array.isArray(item)) && n > 0) {
    arr = Array.prototype.concat.apply([], arr);
    n--;
  }
  return arr;
}

const res = flat(input, 1);
console.log(res);

function flat_(arr, n) {
  let res = [];
  function loop(arr) {
    arr.forEach(item => {
      if (Array.isArray(item) && n > 0) {
        loop(item, --n);
      } else {
        res.push(item);
      }
    });
  }
  loop(arr);
  return res;
}

const res_ = flat_(input, 2);
console.log(res_);

function flat__(arr, n) {
  if (n > 0) {
    return arr.reduce((prev, cur) => {
      prev = prev.concat(Array.isArray(cur) ? flat__(cur, --n) : cur);
      return prev;
    }, []);
  }
  return arr;
}
const res__ = flat__(input, 10);
console.log(res__);
