/** @format */

function createTask(ms) {
  return () => {
    console.log("Start", ms);
    return new Promise(r => {
      setTimeout(() => {
        console.log("End", ms);
        r(ms);
      }, ms);
    });
  };
}

const tasks = Array(5)
  .fill(null)
  .map((_, i) => createTask(i * 1000));

// 输出结果
Promise.all(tasks.map(task => task())).then(console.log);

// "Start" 0
// "Start" 1000
// "Start" 2000
// "Start" 3000
// "Start" 4000
// "End" 0
// "End" 1000
// "End" 2000
// "End" 3000
// "End" 4000
// [0,1000,2000,3000,4000]

// 做一个并发调度
function limitRunTask(promiseArr, limit) {}

limitRunTask(promiseList, 2).then(console.log);
