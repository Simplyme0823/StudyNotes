/** @format */

// var a = ? 使得一下成立
var a = {
  index: -1,
  arr: [3, 6, 9],
  [Symbol.toPrimitive]() {
    return this.arr[++this.index];
  },
  //   valueOf() {
  //     return this.arr[++this.index];
  //   },
  //   toString() {
  //     return this.arr[++this.index];
  //   },
};

// Symbol.toPrimitive, valueOf, toString 都可以
if (a == 3 && a == 6 && a == 9) {
  console.log("success");
}

// https://segmentfault.com/a/1190000019735321?utm_source=sf-related
