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
