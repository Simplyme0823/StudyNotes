/** @format */

// koa的中间件是利用递归，那么递归可以通过循环来实现
// lodash方法
function compose(funcs) {
  const len = funcs.length;
  for (let i = 0; i < len; i++) {
    if (typeof funcs[i] !== "function") {
      throw Error(`${i} is not a function`);
    }
  }

  return function (...args) {
    let index = 0;
    let res = length ? funcs.reverse()[index].apply(this, args) : args[0];
    while (++index < length) {
      res = funcs[index].call(this, res);
    }
    return res;
  };
}

// redux
// initialValue初始值undefined时为数组第一个元素
function compose_(...funcs) {
  if (funcs.length === 0) {
    return arg => arg;
  }
  if (funcs.length === 1) {
    return funcs[0];
  }

  return funcs.reduce((prev, cur) => (...args) => prev(cur(...args)));
}
