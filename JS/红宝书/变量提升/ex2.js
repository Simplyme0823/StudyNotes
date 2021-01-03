/** @format */

var foo = 1;
function bar() {
  if (!foo) {
    var foo = 10;
  }

  // var foo
  // if(!foo){
  //  foo = 10
  // }

  console.log(foo);
}
bar(); //10
