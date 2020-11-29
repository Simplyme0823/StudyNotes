/** @format */

class MySetInterval {
  constructor() {
    this.timer = null;
  }
  mockSetInterval(callback, interavl) {
    return (this.timer = setTimeout(() => {
      callback();
      this.timer = this.mockSetInterval(callback, interavl);
    }, interavl));
  }

  mockClearSetInterval() {
    clearTimeout(this.timer);
    this.timer = null;
  }
}

const mySetInterval = new MySetInterval();
const callback = () => console.log(1);
mySetInterval.mockSetInterval(callback, 1000);
setTimeout(() => {
  mySetInterval.mockClearSetInterval();
}, 5000);

// 原始setInterval验证
// const timer = setInterval(() => {
//   callback();
// }, 1000);

// setTimeout(() => {
//   clearInterval(timer);
// }, 5000);

// 使用setTimeout替代setInterval的原因
// 1. 无视代码错误
// 2. 不保证执行间隔；setTimeout直接将回调函数推入任务队列，setInterval在推入前，需要检查任务队列中是否存在相同的回调函数（即未执行），若有则忽略本次推入。
