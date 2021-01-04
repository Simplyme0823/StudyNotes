/** @format */

const test = [, , , 1];
// false
console.log(0 in test, test[0]);

// 通过in操作符可以检测稀数组
// filter every 等会直接过滤空元素
