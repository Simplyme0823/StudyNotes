/** @format */

const arr = [0, 1, 2, 4, 5];
const proxy = new Proxy(arr, {
  get(target, propery) {
    if (propery in target) {
      return Reflect.get(target, propery);
    } else {
      throw new Error("error");
    }
  },
  set(target, property, value) {
    console.log("响应了...");
    return Reflect.set(target, property, value);
  },
});

proxy.pop();
proxy[0] = 10;
// 直接改变数组长度
proxy.length = 100;
// 响应了...
// 响应了...
// 响应了...
// [ 10, 1, 2, 4 ]
console.log(proxy);
