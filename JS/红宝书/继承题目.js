/** @format */

// superType为基类
function superType() {}

// subType为派生类
function subType() {
  superType.call(this);
}
subType.prototype = Object.create(superType.prototype);
subType.prototype.constructor = subType;

// 基类原型对象prototype：superType
console.log(superType.prototype);
// 基类原型对象的原型对象： 对象是没有prototype，只有构造函数有
console.log(superType.prototype.prototype);
// 基类原型对象的__proto__： Object.prototype/{}
console.log(superType.prototype.__proto__);
// 基类函数对象的__proto__： Function
console.log(superType.__proto__);
// Function的prototype： undefined
console.log(superType.__proto__.prototype);
// Function的__proto__: Object.prototype/{}
console.log(superType.__proto__.__proto__);

console.log(Function.prototype); // Funciton
console.log(Function.__proto__); // Funciton
console.log(Function.prototype.prototype); // undefined
console.log(Function.__proto__.__proto__); // Object.prototype/{}

// 对象 subType { constructor: [Function: subType] }
console.log(subType.prototype);

// undefined,原型对象是对象，对象是没有prototype属性的
// prototype.prototype都是undefined
console.log(subType.prototype.prototype);

// superType {}
console.log(subType.prototype.__proto__);

// Object.prototype/{}
console.log(subType.prototype.__proto__.__proto__ === Object.prototype);

// Function
console.log(subType.__proto__);

//  TODO Object.create与原型链的关系
const obj = Object.create({ a: "a" });
// {a: "a"}
console.log(obj.__proto__);
// Object.prototype/{}
console.log(obj.__proto__.__proto__);
// null
console.log(obj.__proto__.__proto__.__proto__);
