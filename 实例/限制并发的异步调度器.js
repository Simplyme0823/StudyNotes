/** @format */
// 核心：用一个promise状态控制另一个promise
class Scheduler {
  constructor(limit = 2) {
    this.limit = limit;
    this.reaminTasks = [];
    this.alive = 0;
  }

  add(promiseCreator) {
    return new Promise((resolve, reject) => {
      this.reaminTasks.push({
        promise: promiseCreator,
        resolve,
        reject,
      });
      this.requestTask();
    });
  }

  requestTask() {
    if (this.reaminTasks.length === 0) return;
    if (this.alive < this.limit && this.reaminTasks.length) {
      let { promise, resolve } = this.reaminTasks.shift();
      promise().then(() => {
        resolve();
        this.alive--;
        this.requestTask();
      });
      this.alive++;
    }
  }
}

const timeout = time =>
  new Promise(resolve => {
    setTimeout(resolve, time);
  });

const scheduler = new Scheduler();
const addTask = (time, order) => {
  scheduler
    .add(() => timeout(time))
    .then(() => console.log(order, new Date().getTime()));
};

addTask(1000, "1");
addTask(500, "2");
addTask(300, "3");
addTask(400, "4");
