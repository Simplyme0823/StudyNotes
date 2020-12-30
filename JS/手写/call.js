/** @format */

function myCall(context, fn, ...args) {
  // 没有上下文就指定为window
  context = context || window;
  // 构造上下文环境
  context.fn = fn;
  // 执行
  const result = context.fn(...args);
  // 消除副作用
  delete context.fn;
  return result;
}

const context = { name: "name" };
function test(...params) {
  console.log(params);
}

myCall(context, test, 1, 3, 4);
