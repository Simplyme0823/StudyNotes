/** @format */

Object.prototype.a = "a";
Function.prototype.a = "a1";
function Person() {}
var foo = new Person();
console.log(Person.a); // 'a1'
console.log(foo.a); // a
console.log((1).a); // 'a'  // 1. a 转为一个对象
// console.log(1.a); // error
console.log(foo.__proto__.__proto__.constructor.constructor.constructor);
console.log(1);
