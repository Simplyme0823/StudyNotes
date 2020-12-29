/** @format */

window.name = "ByteDance";

class A {
  constructor() {
    this.name = 123;
  }

  getA() {
    // undefined
    console.log(this);

    // 报错了
    return this.name + 1;
  }
}

let a = new A();

let funcA = a.getA;

funcA(); // 报错
