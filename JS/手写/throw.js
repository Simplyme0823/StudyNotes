/** @format */

function* F() {
  let first = yield 1;
  let second;
  //   try {
  second = yield 1 + first;
  //   } catch (err) {
  //     second = 5;
  //   }
  let third = yield 3 + second;
}

const f = F();
console.log(f.next());
console.log(f.next(1));

try {
  f.throw(5);
} catch (err) {
  console.log(err);
}
