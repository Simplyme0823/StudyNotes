/** @format */

const a = {
  valueOf() {
    return {};
  },
  toString() {
    return {};
  },
};
// Cannot convert object to primitive value
console.log(0 + a);
