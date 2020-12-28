/** @format */

function asyncify(fn) {
  let orignFn = fn;
  let timer = setTimeout(() => {
    timer = null;
    if (fn) fn();
  });
  fn = null;
  return function () {
    if (timer) {
      // 为了获取上下文环境
      fn = orignFn.bind.apply(orignFn, [this].concat([].slice.call(arguments)));
    } else {
      // 异步执行了
      clearTimeout(timer);
      timer = null;
      fn.apply(this, arguments);
    }
  };
}
