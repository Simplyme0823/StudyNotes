/** @format */

const inputVal = {
  cate: {
    subject: {
      name: {
        number: 100,
      },
    },
  },
};

function digui(inputVal, [...path]) {
  const [key, value] = Object.entries(inputVal)[0];

  if (typeof value !== "object") {
    path.push(key);
    path.push(value);
    return path;
  }
  path.push(key);
  return digui(value, [...path]);
}

const res = digui(inputVal, []);
console.log(res);
