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

function repeat(func, times, wait) {
  loop(times);
  function loop(times) {
    if (times === 0) return;
    setTimeout(() => {
      func();
      times--;
      loop(times);
    }, wait);
  }
}

const output = (...res) => console.log(res);
const repeatFunc = repeat(output, 4, 3000);
