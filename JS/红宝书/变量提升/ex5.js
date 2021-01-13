/** @format */

// Function foo
console.log(foo);

foo();

var foo = 10;

// 10
console.log(foo);

function foo() {
  var a;
  // undefined
  console.log(a);
  a = 12;
  // 12
  console.log(a);
}

//10
console.log(foo);
