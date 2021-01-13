/** @format */

var foo = 1;
function bar() {
  // 这里的var变量提升，但是作用域在bar函数内部
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
