/** @format */

console.log(Function.prototype === Function); // false
console.log(Function.__proto__ === Function); // false

console.log(Function.prototype === Function.prototype); // true
console.log(Function.__proto__ === Function.prototype); // true
