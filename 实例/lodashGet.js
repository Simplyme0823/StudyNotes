/** @format */

const obj = {
  a: {
    b: {
      c: {
        d: [{ e: 4 }],
      },
    },
  },
};

function getValue(target, path, defaultVal) {
  let preTarget = target;

  if (path.includes("[")) {
    path = path.replace("[", ".").replace("]", "");
  }

  let paths = path.split(".");
  console.log(paths);
  for (let k of paths) {
    if (preTarget[k]) {
      preTarget = preTarget[k];
    } else {
      return defaultVal;
    }
  }
  return preTarget;
}

const res = getValue(obj, "a.b.c.d[0]", "test");
console.log(res);
