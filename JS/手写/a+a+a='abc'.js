/** @format */

let value = "a";
const test = {};
Object.defineProperty(test, "a", {
  get() {
    let result = value;
    if (value === "a") {
      value = "b";
    } else if (value === "b") {
      value = "c";
    }
    return result;
  },
});
console.log(test.a + test.a + test.a);
