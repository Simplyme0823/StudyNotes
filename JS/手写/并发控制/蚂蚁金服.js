/** @format */

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

const subFlow = createFlow([() => delay(1000).then(() => log("c"))]);
const log = console.log;
createFlow([
  () => log("a"),
  () => log("b"),
  subFlow,
  [() => delay(1000).then(() => log("d")), () => log("e")],
]).run(() => {
  console.log("done");
});

// 需要按照 a,b,延迟1秒,c,延迟1秒,d,e, done 的顺序打印

//juejin.cn/post/6860646761392930830

function createFlow(promiseCreaterArr) {
  function Fn() {
    return promiseCreaterArr.reduce((prev, cur) => {
      return prev.then(() => {
        if (Array.isArray(cur)) {
          return createFlow(cur).run();
        } else if (typeof cur === "function") {
          return cur();
        } else if (cur.run) {
          return cur.run();
        }
      });
    }, Promise.resolve());
  }
  Fn.run = function (cb) {
    const res = Fn();
    if (cb) {
      res.then(cb);
    }
    return res;
  };
  return Fn;
}
