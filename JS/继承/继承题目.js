/** @format */

// superType为基类
function superType() {}

// subType为派生类
function subType() {
  superType.call(this);
}
subType.prototype = Object.create(superType.prototype);
subType.prototype.constructor = subType;

// superType {}
console.log(superType.prototype);
// undefined
console.log(superType.prototype.prototype);
// Object.prototype
console.log(superType.prototype.__proto__);
// Function
console.log(superType.__proto__);
// undefined
console.log(superType.__proto__.prototype);
// Function
console.log(superType.__proto__.__proto__);
// Function
console.log(Function.prototype);
// Function
console.log(Function.__proto__);
// Function
console.log(Function.prototype.prototype);
// Function
console.log(Function.__proto__.__proto__);

// subType { constructor: [Function: subType] }
console.log(subType.prototype);
// undefined
console.log(subType.prototype.prototype);

// 这里是由于Object.create的原因
// superType {}
console.log(subType.prototype.__proto__);

// true
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
