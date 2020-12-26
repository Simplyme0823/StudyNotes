/** @format */

// 1. 下面的输出
var a = function () {
  this.b = 3;
};
var c = new a();

a.prototype.b = 9;

var b = 7;

a();
console.log(b); // 3
console.log(c.b); //3

// 2. js继承实现

// 1. 原型:缺点是无法传参，所有方法/属性共享
function superType() {}
function subType() {}
subType.prototype = new superType();
superType.prototype.constructor = subType;

//2. 借用构造函数：缺点是无法共享方法
function superType() {}
function subType() {
  superType.apply(this, ...arguments);
}

// 3. 组合：缺点是调用两次父函数
function superType() {}
function subType() {
  superType.apply(this, ...arguments);
}
subType.prototype = new superType();
superType.prototype.constructor = subType;

// 4. Obejct.create 原型式继承
function inheirt(O) {
  function F() {}
  F.prototype = O;
  return new F();
}
function superType() {}
function subType() {}
subType.prototype = inheirt(superType.prototype);
superType.prototype.constructor = subType;

// 5. 寄生组合
function superType() {}
function subType() {
  superType.apply(this, ...arguments);
}
subType.prototype = inheirt(superType.prototype);
superType.prototype.constructor = subType;

// 3. repeat方法 输出4次hello world 每次三秒
// 参考 异步间隔输出.js的 async/await方法
function repeat(func, times, wait) {
  return function loop(...args) {
    if (times === 0) return;
    setTimeout(() => {
      func(...args);
      times--;
      loop(...args);
    }, wait);
  };
}

const output = (...args) => console.log(...args);
const repeatFunc = repeat(output, 4, 3000);
// repeatFunc("hello world");

function repeat_(func, times, wait) {
  async function run(wait, ...args) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve();
        func(...args);
      }, wait);
    });
  }

  return async function loop(...args) {
    for (let i = 0; i < times; i++) {
      await run(wait, ...args);
    }
  };
}

async function run(wait) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, wait);
  });
}
const repeatFunc_ = repeat_(output, 4, 3000);
repeatFunc_("hello workd");

// 4. 给定一个整数数组，每个元素大小的都在1-100之间，对这个数组进行排序，范围扩大到32为整数怎么办
// 数组长度: 2 ^ 31 - 1;

const len = Math.pow(2, 32);
const arr = new Array(len);

// hash表结构
//哈希表本质上是基于数组来存储，但是插入键值对的时候并不是直接存入数组中，而是通过对键进行hash运算得到hash值，然后和数组进行取模得到其在数组中的位置，然后插入

// 插入/删除操作可以做到O(1)，最坏情况的是O(n)

// 负载因子

// hash函数类型

// hash冲突
// 链地址法：链表，使用链表存储冲突的元素
// 开放地址法：按照某种方法继续探测哈希表中的其他存储单元，直到找到空位置为止
// 线性探测，指数探测
// 再散列法

// 数学结构与算法，有什么地方很巧妙
