/** @format */

// 一个请求
const p1 = Promise.resolve(1).then(res => {
  console.log(res);
});
const p2 = Promise.resolve(100).then(res => {
  console.log(res);
});
const p3 = new Promise(resolve => {
  resolve(3);
}).then(res => {
  console.log(res);
});

const p4 = new Promise(resolve => {
  resolve(4);
}).then(res => {
  console.log(res);
});

const p5 = new Promise(resolve => {
  resolve(5);
}).then(res => {
  console.log(res);
});

const input = [p1, p3, p2, p1, p3];
const cb = () => console.log("cb");

function run(promiseArr, cb) {
  const chain = promiseArr.reduce((prev, cur) => {
    return prev.then(() => cur);
  }, Promise.resolve());
  chain.then(cb);
}

run(input, cb);

// 多个请求
function runN(promiseArr, n, cb) {
  let index = 0;
  const len = promiseArr.length;
  loop();
  function loop() {
    if (index >= len) {
      return cb();
    }
    Promise.all(promiseArr.slice(index, index + n)).then(() => {
      index += n;
      loop();
    });
  }
}

// runN(input, 2, cb);

// 最多同时run n个
function loopRequest(promiseArr, max = 3) {
  const taskPool = [];
  const loopFn = async tasks => {
    if (tasks.length === 0) return;
    const currentTask = tasks.shift();

    try {
      await currentTask.request();
    } catch (err) {
      this.pauses.push(currentTask);
    }

    return loopFn(tasks);
  };

  while (max--) {
    taskPool.push(loopFn(promiseArr));
  }
  return Promise.all(taskPool);
}

class LoopRequest {
  constructor(limit) {
    this.limit = limit;
    this.taskQueue = [];
    this.currentTaskCounts = 0;
  }
  addTask(fn) {
    return new Promise((resolve, reject) => {
      this.taskQueue.push({ fn, resolve, reject });
      // this.currentTaskCounts++;
      this.runTask();
    });
  }
  runTask() {
    if (this.currentTaskCounts < this.limit && this.taskQueue.length > 0) {
      const { resolve, fn, reject } = this.taskQueue.shift();
      fn()
        .then(res => {
          console.log("res", res);
          resolve(res);
          this.currentTaskCounts--;
          this.runTask();
        })
        .catch(err => {
          reject(err);
          this.currentTaskCounts--;
          this.runTask();
        });
      // 在这里调节
      this.currentTaskCounts++;
    }
  }
}

const limitRun = new LoopRequest(2);

const fn1 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("1", new Date().getTime());
      resolve();
    }, 1000);
  });
};

const fn2 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("2", new Date().getTime());
      resolve();
    }, 500);
  });
};

const fn3 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("3", new Date().getTime());
      resolve();
    }, 300);
  });
};

const fn4 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("4", new Date().getTime());
      resolve();
    }, 400);
  });
};

limitRun.addTask(fn1);
limitRun.addTask(fn2);
limitRun.addTask(fn3);
limitRun.addTask(fn4);
