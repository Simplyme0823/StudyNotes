/** @format */

// 任何函数内单独调用函数 被调用的函数的this为window 严格模式下为undefined

const o1 = {
  text: "01",
  fn: function () {
    return this.text;
  },
};

const o2 = {
  text: "02",
  fn: function () {
    return o1.fn();
  },
};

const o3 = {
  text: "03",
  fn: function () {
    var fn = o1.fn;
    return fn();
  },
};

// 01
console.log(o1.fn());
// 01
console.log(o2.fn());
// undefined
console.log(o3.fn());
