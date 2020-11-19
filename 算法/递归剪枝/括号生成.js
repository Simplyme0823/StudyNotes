/** @format */

const generateParenthesis = n => {
  const res = [];
  const generate = (str, left, right) => {
    if (str.length == n * 2) {
      res.push(str);
      return;
    }

    if (left > 0) {
      generate(str + "(", left - 1, right);
    }
    if (right > left) {
      generate(str + ")", left, right - 1);
    }
  };
  generate("", n, n);
  return res;
};
const res = generateParenthesis(3);
console.log(res);
