/** @format */

const res = add(1)(2)(4, 5, 6)(); //18

function add(...args) {
  return function F(...newArgs) {
    if (newArgs.length === 0) {
      return args.reduce((prev, cur) => {
        return (prev += cur);
      }, 0);
    } else {
      return add(...args.concat(newArgs));
    }
  };
}

console.log(res);
