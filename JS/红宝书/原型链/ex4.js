/** @format */
// https://blog.csdn.net/sinat_38959166/article/details/103635398

var a = new Object(); // { }
a.param = 123; // {param: 123}

// window.get
function foo() {
  get = function () {
    console.log(1);
  };
  return this;
}

foo.get = function () {
  console.log(2);
};

foo.prototype.get = function () {
  console.log(3);
};

// window.get
var get = function () {
  console.log(4);
};

function get() {
  console.log(5);
}

// 考点之一：变量提升
// function 提升比 var 优先级高
foo.get(); //2 √
get(); //4 √
foo().get(); // 1 √
get(); //1
new foo.get(); //2 √   点运算符优先级为19 不带参数的new优先级为18 先执行foo.get
const res = new foo().get(); //1 × 3 带参数的new 优先级为19 点运算符优先级为19 左往右运算  先new得到对象再.get
console.log(res);

// 先new foo() 得到 foo{}类型的对象， 然后 new {}.get()
new new foo().get(); // × 3 两个一元运算符 由右往左运算 new (new foo()).get()
