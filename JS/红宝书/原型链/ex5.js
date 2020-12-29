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

console.log(child.__proto__); // Person{}

console.log(child.__proto__.__proto__); // Object.prototype  这里给添加了属性{a:'object'}

console.log(child.__proto__.__proto__ === Object.prototype); // true

console.log(child.__proto__.__proto__.__proto__); // null

console.log(child.__proto__.__proto__.constructor); // Object 其实是[Function: Object]

console.log(child.__proto__.__proto__.constructor.constructor.constructor); // Function

console.log(child.__proto__.__proto__.constructor.constructor.constructor); // Function

console.log(child.__proto__ === Person.prototype); // true
console.log(Person.prototype.__proto__ === Object.prototype); // true
console.log(Object.prototype.constructor === Object); // true
console.log(Object.constructor === Function); // true
console.log(Function.constructor === Function); // true

console.log(
  Function.__proto__,
  Function.__proto__ == Function,
  Function.__proto__ === Function,
); // false false

console.log(Function.__proto__.constructor === Function); // true

console.log(
  Function.prototype,
  Function.prototype == Function,
  Function.prototype == Function,
); // false false
console.log(Function.prototype.constructor === Function); // true
