/** @format */

// 数组的toString方法
const a = [1, 2, 3] + "abc";
console.log(a); //1,2,3abc

// Reg
const re = /abc/gi;
console.log(re + "abc"); ///abc/giabc

// Function
function test() {}
console.log(test.toString()); //function test (){}

// Date
const date = new Date();
console.log(date.toString()); //Sat Oct 03 2020 13:17:26 GMT+0800 (GMT+08:00)

// Numebr
const num = 100;
console.log(num.toString(2)); //1100100 二进制

// Error
const err = new Error("error");
console.log(err.toString()); //Error: error
