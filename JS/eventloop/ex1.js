/** @format */

const list = [1, 2, 3];

const square = num => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(num * num);
    }, 1000);
  });
};

function test() {

    //  forEach有问题
  list.forEach(async (x, index) => {
    setTimeout(() => {
      square(x).then(res => {
        console.log(res);
      });
    }, index * 1000);
  });
}
// 同时输出 1 4 9
test();

// 改写test函数，使之间隔输出 1 4 9
