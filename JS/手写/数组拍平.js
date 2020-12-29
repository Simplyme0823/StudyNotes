/** @format */

const input = [1, [2, 3], [4, [5, [6]]]];

// 1. toString
function flatByString(input) {
  return input.toString().split(",");
}

// 2. 递归
let res = [];
function flatByRe(input) {
  input.forEach(item => {
    if (Array.isArray(item)) {
      flatByRe(item);
    } else {
      res.push(item);
    }
  });
}
// flatByRe(input);
// console.log(res);

// 3. 循环, apply方法传入数组，解构
function flatByConcat(input) {
  while (input.some(item => Array.isArray(item))) {
    input = Array.prototype.concat.apply([], input);
  }
  return input;
}
console.log(flatByConcat(input));

// 4. 递归 扩展运算符
function flatByRe_(input) {
  const res = [];
  const flag = true;
  input.forEach(item => {
    if (Array.isArray(item)) {
      res.push(...item);
      flag = true;
    } else {
      res.push(item);
    }
  });
  if (!flag) {
    return flatByRe_(res);
  }
  return res;
}

// 5. reduce + concat
function fn(arr) {
  return arr.reduce((prev, cur) => {
    return prev.concat(Array.isArray(cur) ? fn(cur) : cur);
  });
}
