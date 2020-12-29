/** @format */

function superType() {
  this.a = "super";
}

superType.prototype.b = "b";
const ins = new superType();

console.log(String.prototype); // [String:'']
console.log(String.constructor); // Function
console.log(Array.constructor); // Function
console.log(Object.constructor); // Function
