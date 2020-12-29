/** @format */
// 原型链继承
function superType() {
  this.colors = ["red", "blue"];
}

function subType() {}

subType.prototype = new subType();
const sub1 = new subType();

//  借用构造函数
function superType(name) {
  this.name = name;
}

function subType(name) {
  superType.call(this, name);
}

const sub2 = new subType("sub");

// 组合继承

function superType(name) {
  this.name = name;
}

function subType(name) {
  superType.call(this, name);
}

subType.prototype = new superType();
superType.prototype.constructor = subType;

const sub3 = new subType("sub");

// 原型式继承
function object(o) {
  function F() {}
  F.prototype = o;
  return new F();
}

// 寄生式继承
function createAnother(orign) {
  const clone = object(orign);
  clone.sayHi = function () {
    console.log("Hi");
  };
  return clone;
}

// 组合继承

function superType(name) {
  this.name = name;
}

function subType(name) {
  superType.call(this, name);
}

const prototype = Object.create(superType.prototype);
prototype.constructor = subType;
subType.prototype = prototype;
