/** @format */

https://www.cnblogs.com/chenjg/p/9657574.html

// 1. JS主线程阻塞会导致，setInterval函数调用被略过，
// 2. 无视错误代码 ，会导致一直运行
// 3. 无视任何情况下定时执行，如果想发起网络请求，不会根据响应结果决定递归与否

let num = 0;
let max = 100;

let increase = function () {
  num++;

  if (num < max) {
    setTimeout(increase, 500);
  } else {
    return;
  }
};

setTimeout(increase, 500);
