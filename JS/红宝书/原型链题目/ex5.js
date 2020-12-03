/** @format */
// 基于__proto__找所属类的prototype;

Object.prototype.a = "Object";
Function.prototype.a = "Function";
function Person() {}
var child = new Person();
// 找到Person.__proto__ -> Function Function.prototype.a
console.log(Person.a); // Function
// 找到child.__proto__ -> Person函数的原型对象 {} -> 找到原型对象的__proto__ 即，普通对象的__proto__ -> Object.prototype
console.log(child.a); // Object

console.log(child.__proto__.__proto__.constructor.constructor.constructor);

child.__proto__ === Person.prototype;
Person.prototype.__proto__ === Object.prototype;
Object.prototype.constructor === Object;
Object.constructor === Function;
Function.constructor === Function;
Function.__proto__ === Function;
Function.__proto__.constructor === Function;
Function.prototype === Function;
Function.prototype.constructor === Function;
