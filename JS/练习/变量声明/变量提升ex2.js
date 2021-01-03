/** @format */

test(10);
function test(params) {
  console.log(test); // 内部变量提升 undefined
  test = params; // 这个test是函数内部的
  console.log(test); // 10
  var test; // 注意有无这行的区别
}

console.log(test); // 这里全局寻找test变量为test函数体

test = 1;

console.log(test); // 1

// 总结
// 作用域在编译阶段完成
// 作用域链是在执行上下文创建过程中生成，因为只有函数中在调用的时候才会有执行上下文context
