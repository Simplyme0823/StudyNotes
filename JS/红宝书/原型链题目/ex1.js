/** @format */

// https://www.nowcoder.com/ta/front-end-interview/review?tpId=10&tqId=11142&query=&asc=true&order=&page=66

// https://www.jianshu.com/p/b745c5481fab
// 第一题

// 这道题的考点之一： 重写构造函数上的原型之后再创建的实例才会引用新的原型。而在此之前创建的实例仍然引用最初的原型 红宝书P237
function Person() {
  this.name = 1;
}
var person1 = new Person();
Person.prototype.name = 2;
console.log(person1.name); //1
console.log(person1.__proto__.name); //2

Person.prototype = {
  name: 3,
};
console.log(person1.name); //1
console.log(person1.__proto__.constructor); // Person
console.log(person1.__proto__.name); //3 正确答案是2

var person2 = new Person();
console.log(person2.__proto__.name); //3

// 这里原型对象被替换成了普通对象，对象本身不存在constructor属性，
// 但是普通对象的原型对象是Object.prototype，其constructor为Object函数
console.log(
  person2.__proto__,
  person2.__proto__.constructor,
  person2.__proto__.constructor === Object,
); // true 我以为是false,只关注到原型对象更改后constructor不在对象本身
console.log(person2.name); // 1

//Person { name: 2 } { name: 3 }
// constructor丢失后，失去了对象类型
console.log(person1.__proto__, person2.__proto__);
