/** @format */

function superType() {
  this.a = "super";
}

superType.prototype.b = "b";
const ins = new superType();

console.log(String.prototype);

console.log(Array.constructor);
console.log(Object.constructor);
