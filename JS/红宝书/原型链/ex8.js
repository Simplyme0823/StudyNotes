/** @format */

function setname(name) {
  this.name = name;
}

setname.prototype.printName = function () {
  console.log(this.name);
};

let a = new setname("cc");
a.name = "dd";
a.__proto__.name = "ee";

// 调用者为a.__proto__ 就是构造函数setname的prototype，即原型对象
a.__proto__.printName(); //ee

// 调用者为a，即setname的实例对象
a.printName(); //dd
