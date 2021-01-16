/** @format */

function Father() {}
function Son() {}
Son.prototype = new Father();
Son.prototype.constructor = Son;
const son = new Son();

// Father{}
console.log(Father.prototype);
// Father.constructor.prototype
console.log(Father.__proto__, Father.__proto__ === Function.prototype);
// Son {}
console.log(Son.prototype);
// Object.prototype ×  undefined √
// 对象是没有原型对象的，只有函数有原型对象
console.log(Son.prototype.prototype);
// Function.prototype
console.log(Son.__proto__);
// undefined，对象是没有prototype属性的
console.log(son.prototype);
// Son {} son.constructor.prototype
console.log(son.__proto__);

class Super {}
class Sub extends Super {}
const sub = new Sub();
// sub.prototype = "prototype";

// Super{}
console.log(Super.prototype);
// Function.prototype
console.log(Super.__proto__ === Function.prototype);
// Sub{}
console.log(Sub.prototype);
// Function Super
console.log(Sub.__proto__ === Super);
// Function.prototype
console.log(Sub.__proto__.__proto__ === Function.prototype);
// undefined
console.log(sub.prototype);
// Sub{}
console.log(sub.__proto__);
