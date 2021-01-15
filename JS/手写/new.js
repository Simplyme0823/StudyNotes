/** @format */

function myNew(fn) {
  // 创建空对象
  const obj = {};
  // 给对象添加[[Prototype]]属性，即，obj.__proto__ = fn.prototype

  Object.setPrototypeOf(obj, fn.prototype);
  const args = Array.prototype.slice.call(arguments, 1);
  // fn的context为新对象，并且执行构造函数
  const res = fn.apply(obj, ...args);
  // 如果构造函数返回非空对象就返回这个对象，否则返回新创建的对象
  return typeof res === "object" && res !== null ? res : obj;
}

// 如果构造函数new的时候没有参数，可以不写括号
// 如果没有new操作符，构造函数也是一个普通的函数，调用的时候this指向window
