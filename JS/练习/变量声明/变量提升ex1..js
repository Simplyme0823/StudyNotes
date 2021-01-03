/** @format */
// 例 1
function foo(params) {
  console.log(params);
}

var foo = "foo";

console.log(foo);

// 例 2
var bar = "bar";

function bar(params) {
  console.log(params);
}

console.log(bar);

// 以上顺序，foo/bar同理

// function foo(){}
// var foo
// foo = "bar"
