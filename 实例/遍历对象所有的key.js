/** @format */
let res = [];
function walk(obj) {
  if (typeof obj !== "object" || obj == null) return;
  const keys = Object.keys(obj);
  if (keys.length > 0) {
    keys.forEach(key => {
      res.push(key);
      walk(obj[key]);
    });
  }
}
const test = {
  a: {
    b: {
      c: { f: "aa" },
    },
    d: {
      e: { g: "bb" },
      h: { i: "cc" },
    },
    j: {
      k: "dd",
    },
  },
};

walk(test);

function walk_(obj) {
  let res = [];
  if (typeof obj !== "object" || obj == null) return;
  const queue = [obj];
  while (queue.length > 0) {
    const old = queue.slice();
    queue.length = 0;
    const keys = old.reduce((prev, cur) => {
      prev.push(...Object.keys(cur));
      const newEle = Object.keys(cur).map(key => cur[key]);
      if (newEle.some(item => typeof item === "object")) {
        queue.push(...newEle);
      }
      return prev;
    }, []);
    res.unshift(...keys);
  }
  console.log(res);
  return res;
}
walk_(test);

// const testRes = [];
// testRes.push(...[1, 2, 3]);
// console.log(testRes);
