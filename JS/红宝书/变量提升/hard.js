/** @format */

var x = 1;

// 相当于 在func函数外部声明了一个变量对象
function func(
  x,
  y = function () {
    console.log(x); //5
    x = 2;
  },
) {
  console.log(x, y); //5 function
  var x = 3;
  console.log(x, y); //3 function
  x = 3;
  console.log(x, y); //3 function
  y();
  console.log(x, y); //3 function
}

func(5);

console.log(x); //1
