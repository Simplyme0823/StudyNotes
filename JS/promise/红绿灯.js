/** @format */

function red() {
  console.log("red");
}

function green() {
  console.log("green");
}

function yellow() {
  console.log("yellow");
}

const promiseRed = () =>
  new Promise(resolve => {
    setTimeout(() => {
      red();
      resolve();
      console.log(Date.now());
    }, 3000);
  });

const promiseGreen = () =>
  new Promise(resolve => {
    setTimeout(() => {
      green();
      resolve();
      console.log(Date.now());
    }, 1000);
  });

const promiseYellow = () =>
  new Promise(resolve => {
    setTimeout(() => {
      yellow();
      resolve();
      console.log(Date.now());
    }, 2000);
  });

function run() {
  promiseRed()
    .then(() => promiseGreen())
    .then(() => promiseYellow());
  // .then(run); 递归
}

// 使用setInterval

function trafficControl() {
  let current = 0;
  const borders = { red: 3, green: 5, yellow: 6 };
  setInterval(() => {
    if (current >= 0 && current < 3) {
      console.log("红");
    } else if (current >= 3 && current < 5) {
      console.log("绿");
    } else {
      console.log("黄");
    }
    current++;
    if (current > 5) {
      current = 0;
    }
  }, 1000);
}

trafficControl();
