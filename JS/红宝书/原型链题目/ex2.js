/** @format */

function Outer() {
  this.a = 1;
}

function Inner() {}

var outer = new Outer(); // {a : 1}

Inner.prototype = outer; // {a : 1}

var inner = new Inner();

inner.a = inner.a + 1; // {a :2}

console.log(inner); // {a:2}
console.log(outer); // {a:1}
