/** @format */

function bar(arg1) {
  var arg1;
}
bar("bar");

// SyntaxError: Identifier 'arg1' has already been declared
function foo(arg1) {
  let arg1;
}
foo("foo");
