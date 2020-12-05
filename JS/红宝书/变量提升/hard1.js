/** @format */

var foo = "outer";
function bar(
  x,
  func = () => {
    console.log(x);
    return foo;
  },
) {
  var foo = "inner";
  console.log(func());
}

bar(5); //outer
