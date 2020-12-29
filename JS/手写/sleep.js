/** @format */

// 定时器+promise
function sleep(wait) {
  return new Promise(resolve => {
    setTimeout(resolve, wait);
  });
}

// while循环
function sleep(wait) {
  const start = new Date().getTime();
  while (new Date().getTime() - start < wait) {
    continue;
  }
}
