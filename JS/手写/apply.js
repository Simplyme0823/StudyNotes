/** @format */

function myApply(context, fn, argsArr) {
  context = context || window;
  context.fn = fn;
  const res = context.fn(...argsArr);
  delete context.fn;
  return res;
}
