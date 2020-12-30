/** @format */

function myApply(context, fn, ...argsArr) {
  context = context || window;
  context.fn = fn;
  const res = context.fn(...argsArr);
  delete context.fn;
  return res;
}

function test(params) {
  console.log(this.name, params);
}

const context = { name: "name" };

myApply(context, test, [1, 2, 3]);
