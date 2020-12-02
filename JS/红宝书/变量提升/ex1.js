/** @format */

fn(); //5
function fn() {
  console.log(1);
}
fn(); //5
function fn() {
  console.log(2);
}
fn(); //5
var fn = function () {
  console.log(3);
};
fn(); //3
function fn() {
  console.log(4);
}
fn(); //3
function fn() {
  console.log(5);
}
fn(); //3
