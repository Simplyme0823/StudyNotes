/** @format */

function employee(name, job, born) {
  this.name = name;
  this.job = job;
  this.born = born;
}

var bill = new employee("Bill Gates", "Engineer", 1985);

// prototype  构造函数的属性指向原型链
console.log(employee.prototype); //employee {}

// constructor 原型对象的属性指向构造函数
console.log(Object.getOwnPropertyNames(employee.prototype)); //[ 'constructor' ]
// 可见实例对象并没有constructor属性
console.log(Object.getOwnPropertyNames(bill)); //[ 'name', 'job', 'born' ]
// 但是实例对象可以通过原型对象访问到constructor属性
console.log(bill.constructor); //[Function: employee]

// __proto__  实例的属性指向原型链,但是可能存在兼容性问题
console.log(bill.__proto__); //employee {}

// 构造函数的this.name this.job this.born并不是自身的属性
console.log(Object.getOwnPropertyNames(employee)); //[ 'length', 'name', 'arguments', 'caller', 'prototype' ]
