/** @format */

function add(...args) {
  let nums = [...args];
  return function F(...args2) {
    if (args2.length === 0) {
      return nums.reduce((prev, cur) => (prev += cur), 0);
    } else {
      nums.push(...args2);
      return F;
    }
  };
}

const res = add(1, 2, 3)(1)();
console.log(res);
