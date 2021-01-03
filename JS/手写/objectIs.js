/** @format */

// polyfill

if (!Object.is) {
  Object.is = function (x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  };
}

function recursivelyCheckEqual(x, ...rest) {
  return (
    Object.is(x, rest[0]) && (rest.length < 2 || recursivelyCheckEqual(...rest))
  ); // 为什么会少一个
}

const a = recursivelyCheckEqual(1, 1, 1, 1, 1, 1);
console.log(a);

const res = Object.is({ a: "a" }, { a: "a" });
console.log(res); // false
