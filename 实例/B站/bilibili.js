/** @format */
var a = {};
var b = { key: "b" };
var c = { key: "c" };

a[b] = "b";
a[c] = "c";
console.log(a[b]);

console.log(["10", "10", "10", "10", "10"].map(parseInt));

const fn = (function (a, b) {
  return +a + "b";
})();
console.log(typeof fn);

var x = { x: 1, y: 2 };
var y = [1, 2];
var z = 1;
var u = { x: x, y: y, z: z };
x.x = 6;
y[1] = 7;
z = 8;
console.log(u.x.x, u.y[1], u.z);

const first = () =>
  new Promise((resolve, reject) => {
    console.log(1);
    let p = new Promise((resolve, reject) => {
      console.log(2);
      setTimeout(() => {
        console.log(3);
        resolve(4);
      }, 0);
      resolve(5);
    });
    resolve(6);
    p.then(arg => {
      console.log(arg);
    });
  });

first().then(arg => {
  console.log(arg);
});

console.log(7);

var age = 100;
let years = 6;
if (age > 12) {
  let age = 10;
  var years = age * 3;
}
console.log(years);
