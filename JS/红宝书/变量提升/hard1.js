/** @format */

var foo = "outer";
function bar(
  x,
  // 相当于在bar 函数外部声明了一个func函数
  // foo变量在bar函数形参中没有定义，因此需要访问外部
  func = () => {
    console.log(x);
    return foo;
  },
) {
  var foo = "inner";
  console.log(func());
}

bar(5); //outer
