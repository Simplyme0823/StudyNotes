/** @format */

const input = [1, [2, 3], [4, [5, [6, [7]]]]];

// 1. toString
function flatByString(input) {
  return input.toString().split(",");
}

// 2. forEach+isArray+push+recursivity
//   注意:for...of会遍历空数组
let res1 = [];
function flatByRe(input, n) {
  n = !n && n !== 0 ? Infinity : n;
  input.forEach(item => {
    if (Array.isArray(item) && n > 0) {
      flatByRe(item, --n);
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

// 4. 使用堆栈
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

// 5. reduce + concat + isArray + recursivity
function fn(arr, n) {
  n = !n && n !== 0 ? Infinity : n;
  if (n > 0) {
    return arr.reduce((prev, cur) => {
      return prev.concat(Array.isArray(cur) ? fn(cur) : cur);
    });
  }
  return arr.slice();
}

// ES5 大多数数组方法对空位的处理都会选择跳过空位包括：forEach(), filter(), reduce(), every() 和 some() 都会跳过空位。

// 第六种 generator
function* flatten(array, n) {
  n = !n && n !== 0 ? Infinity : n;
  for (const item of array) {
    if (Array.isArray(item) && n > 0) {
      yield* flatten(item, --n);
    } else {
      yield item;
    }
  }
}
console.log("flatten", ...flatten([1, 2, [3, 4, [5, 6]]]));
