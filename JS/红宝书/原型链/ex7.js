/** @format */

function superType() {
  this.a = "super";
}

superType.prototype.b = "b";
const ins = new superType();
console.log(ins.a, ins.b);
console.log(String.prototype); // [String:'']
console.log(String.constructor === Function); // Function
console.log(Array.constructor === Function); // Function
console.log(Object.constructor === Function); // Function
