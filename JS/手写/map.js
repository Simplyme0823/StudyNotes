/** @format */
// map有两个参数，一个为回调函数，一个为执行的时候 fn的上下文环境
// fn为回调函数，有三个参数
Array.prototype.myMap = function (fn) {
  if (typeof fn !== "function") {
    throw new TypeError(fn + "is not a function");
  }

  const arr = this;
  const newArr = new Array(this.length);

  for (let i = 0; i < len; i++) {
    const res = fn.call(arguments[1], arr[i], i, arr);
    newArr[i] = res;
  }
  return newArr;
};

// 应用
var elems = document.querySelectorAll("select option:checked");
var values = Array.prototype.map.call(elems, function (obj) {
  return obj.value;
});
