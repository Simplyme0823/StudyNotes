/** @format */

function a() {
  console.log("a");

  Promise.resolve().then(() => {
    console.log("e");
  });
}

function b() {
  console.log("b");
}

function c() {
  console.log("c");
}

function d() {
  setTimeout(a, 0);

  var temp = Promise.resolve().then(b);

  setTimeout(c, 0);

  console.log("d");
}

d();
// d b a e c
