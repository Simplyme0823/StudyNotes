/** @format */

// instanceof 运算符用来检测 constructor.prototype 是否存在于参数 object 的原型链上。

// p是promise的实例

// 不停地遍历sub的原型的原型的原型...........
function instanceof_(sub, sup) {
  let proto = Object.getPrototypeOf(sub);
  let prototype = sup.prototype;

  while (proto !== null) {
    if (proto == prototype) {
      return true;
    }
    proto = Object.getPrototypeOf(sub);
  }
  return false;
}
