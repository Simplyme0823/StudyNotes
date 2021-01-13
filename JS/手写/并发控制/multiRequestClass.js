/** @format */

class multiRequest {
  constructor(limitNum) {
    this.limitNum = limitNum;
    this.current = 0;
    this.tasks = [];
  }

  // 这里可以返回promise 也可以不返回
  addTask(fn) {
    // new Promise((resolve, reject) => {
    this.tasks.push(fn);
    this.run();
    // });
  }

  run() {
    while (this.current < this.limitNum && this.tasks.length > 0) {
      const currentTask = this.tasks.shift();
      // const { fn, resolve, reject } = currentTask;
      currentTask()
        .then(res => {
          console.log(res);
          // resolve(res);
        })
        .catch(err => {
          // reject(err);
        })
        .finally(() => {
          this.current--;
          this.run();
        });
      this.current++;
    }
  }
}

const limitRun = new multiRequest(2);

const fn1 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(1);
    }, 1000);
  });
};

const fn2 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(2);
    }, 500);
  });
};

const fn3 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(3);
    }, 300);
  });
};

const fn4 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(4);
    }, 400);
  });
};

limitRun.addTask(fn1);
limitRun.addTask(fn2);
limitRun.addTask(fn3);
limitRun.addTask(fn4);

// const scheduler = new Scheduler();
// const addTask = (time, order) => {
//   scheduler
//     .add(() => timeout(time))
//     .then(() => console.log(order, new Date().getTime()));
// };
