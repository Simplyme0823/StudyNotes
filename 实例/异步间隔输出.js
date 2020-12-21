/** @format */

// red 1s yellow  2s green 4s 循环5次

// 我的思路
// function print() {
//   setTimeout(() => {
//     console.log("red");
//   }, 1000);
//   setTimeout(() => {
//     console.log("yellow");
//   }, 2000);
//   setTimeout(() => {
//     console.log("green");
//   }, 4000);
// }

//  答案思路

// 1. 回调函数
function print(index) {
  setTimeout(() => {
    console.log("red");
    setTimeout(() => {
      console.log("yellow");
      setTimeout(() => {
        console.log("green");
        if (index < 5) {
          index++;
          print(index);
        }
      }, 4000);
    }, 2000);
  }, 1000);
}
print(0);

// 2. async + await
function run(i) {
  return new Promise((resolve, reject) => {
    if (i > 4) return reject;
    setTimeout(() => {
      console.log("red");
      setTimeout(() => {
        console.log("yellow");
        setTimeout(() => {
          console.log("green");
          resolve();
        }, 4000);
      }, 2000);
    }, 1000);
  });
}

function sleep(time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, time);
  });
}

async function run_() {
  console.log("red");
  await sleep(1000);
  console.log("yellow");
  await sleep(2000);
  console.log("green");
  await sleep(4000);
}

async function loop() {
  for (let i = 0; i < 5; i++) {
    // await run(i);
    await run_();
  }
}

// loop();
