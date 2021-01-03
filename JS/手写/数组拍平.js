/** @format */

const input = [1, [2, 3], [4, [5, [6, [7]]]]];

// 1. toString
function flatByString(input) {
  return input.toString().split(",");
}

// 2. 递归
let res1 = [];
function flatByRe(input) {
  input.forEach(item => {
    if (Array.isArray(item)) {
      flatByRe(item);
    } else {
      res1.push(item);
    }
  });
}
flatByRe(input);
console.log(res1, "res1");

// 3. 循环, apply方法传入数组，解构
function flatByConcat(input) {
  while (input.some(item => Array.isArray(item))) {
    input = Array.prototype.concat.apply([], input);
  }
  return input;
}
console.log(flatByConcat(input));

// 4. 递归 扩展运算符
const res = [];
function flatByRe_(input) {
  flag = true;
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

// ES5 大多数数组方法对空位的处理都会选择跳过空位包括：forEach(), filter(), reduce(), every() 和 some() 都会跳过空位。
