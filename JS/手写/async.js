/** @format */

const fs = require("fs");

function run(gen) {
  return new Promise((resolve, reject) => {
    const task = gen();
    function step(next) {
      let result;
      // 这里的try是捕获yield 执行错误
      // 一旦出现错误立即终止运行，因此后面剩余的yield并不会执行
      // 但是，如果在生成器函数内部使用了try...catch会使得函数正常秩序
      try {
        result = next();
      } catch (err) {
        console.log(err, "try catch");
        return reject(err);
      }

      if (result.done) {
        // 生成器对象没有错误完全执行完，返回最终的promise对象
        return resolve(result.value);
      }

      return (
        // 将yield返回的值包装成一个promise对象,
        // 如果next.value是rejected的promise，会调用catch函数
        // 然后再下一轮的step函数调用中被捕获最后
        Promise.resolve(result.value)
          .then(value => {
            step(() => task.next(value));
          })
          .catch(err => {
            console.log(err, "throw");
            step(() => task.throw(err));
          })
      );
    }

    step(() => task.next());
  });
}

const res = run(function* () {
  // try {
  yield fs.openSync("fdas");
  // } catch (err) {
  //   console.log(err, "run");
  // }

  val = yield Promise.resolve(42);
  console.log(val);
  try {
    val = yield Promise.reject(41);
  } catch (err) {}

  val = yield Promise.reject(40);
  console.log(val);
});

res.catch(() => {
  console.log();
});
