/** @format */

function compose(middleware) {
  return function (context, next) {
    // index就是为了防止多次调用next()
    let index = -1;
    return dispatch(0);

    // 中间件内 await next()
    function dispatch(i) {
      console.log(i, index);
      if (i <= index) return Promise.reject("next called two times");
      index = i;
      if (i > middleware.length) return;

      let fn = middleware[i];
      if (i === middleware.length) fn = next;
      if (!fn) return Promise.resolve();

      try {
        // 兼容普通函数， try catch也是如此
        return Promise.resolve(fn(context, dispatch.bind(null, i + 1)));
      } catch (err) {
        return Promise.reject(err);
      }
    }
  };
}

const mid = compose([
  async function (context, next) {
    // next引用的是同一个函数
    await next();
    await next();
  },
]);

mid("context", function () {
  console.log("next");
});
// const fs = require("fs");
// try {
//   console.log(fs.readSync("fdsa"));
// } catch (err) {
//   console.log("fdsaf");
//   console.log(err);
// }
