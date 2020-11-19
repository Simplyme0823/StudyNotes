/** @format */
// 与map一样接受两个参数，一个为回调函数，一个为fn的执行环境
// 回调函数有三个参数element ,index, arr
Array.prototype.myFilter = function (fn) {
  if (typeof fn !== "function") {
    throw new TypeError(fn + "is not a function");
  }
  const arr = this;
  const newArray = [];
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    const res = fn.call(arguments[1], arr[i], i, arr);
    if (res) newArray.push(res);
  }

  return newArray;
};
