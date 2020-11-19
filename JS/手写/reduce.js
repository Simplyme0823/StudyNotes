/** @format */

Array.prototype.myReduce = function (fn) {
  if (typeof fn !== "function") {
    throw new TypeError(fn + "is not a function");
  }

  const arr = this;
  const len = arr.length;

  let k = 0;
  let o = Object(this);
  let value; // 累积变化的值
  if (arguments.length >= 2) {
    value = arguments[1];
  } else {
    // 在没有初始值的情况下
    // 遍历整个数组，需要考虑稀疏数组[,,,]情况，判断数组当前是否有元素，如果没有索引加一
    // 最后再赋一个初始值，初始值为第一个存在的元素
    while (k < len && !(k in o)) {
      k++;
    }

    if (k >= len) {
      throw new TypeError("Reduce of empty array with no initial value");
    }

    value = o[k++];
  }

  // 直接 将value传入
  while (k < len) {
    if (k in o) {
      value = fn(value, o[k], k, o);
    }
    k++;
  }

  return value;
};

console.log(1 in [, , ,]);
const res = [1, 3].myReduce((prev, cur, index, arr) => {
  //   console.log(prev);
  prev = prev + cur;

  return prev;
});

console.log(res);
let i = 0;
console.log(i++);
// 形象的理解可以是i++先做别的事，再自己加1，++i先自己加1，再做别的事情。

const arrList = [1, 2, 3, 4];
for (let i = 0; i < arrList.length; i++) {
  console.log(i);
}
