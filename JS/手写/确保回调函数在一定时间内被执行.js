/** @format */

// 确保传入的回调在一定事件内被执行

function run(options) {
  const { fn, wait = 0 } = options;
  let timer = setTimeout(() => {
    // 执行到此说明超时了
    timer = null;
    throw new Error("time out!!!");
  }, wait);
  return function () {
    // 在定时器指定时间内
    if (timer) {
      clearTimeout(timer);
      timer = null;
      fn.apply(this, arguments);
    }
  };
}

// 测试
const opts = {
  wait: 2000,
  fn: () => {
    console.log("test");
  },
};

const cb = run(opts);

function test(cb) {
  setTimeout(() => {
    cb();
  }, 1000);
}

test(cb);

function multiTask(promiseCreaterArr, maxNum = 2) {
  return new Promise(resolve => {
    let counts = 0;
    let result = new Array(promiseCreaterArr.length).fill(false);

    while (counts < maxNum) {
      step();
    }
    function step() {
      let current = counts++;
      if (current > promiseCreaterArr.length) {
        return !result.includes(false) && resolve(result);
      }
      const currentPromiseCreater = promiseCreaterArr[current];
      currentPromiseCreater().then(res => {
        result[current] = res;
        step();
      });
    }
  });
}
