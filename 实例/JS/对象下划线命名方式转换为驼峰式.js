/** @format */

// // before
const obj = {
  first_name_: "chen",
};
//    ​
//    // after
const obj1 = {
  firstName: "chen",
};

function trans(target, map = new Map()) {
  if (map.get(target)) {
    return map.get(target);
  }
  if (typeof target === "object" && target !== null) {
    const cloneVal = Array.isArray(target) ? [] : {};
    map.set(target, cloneVal);
    const keys = Object.keys(target);
    keys.forEach(key => {
      const newKey = key.replace(/(_[a-z])/gm, (a, b) => {
        return b[1].toUpperCase();
      });
      cloneVal[newKey] = trans(target[key], map);
    });
    return cloneVal;
  } else {
    return target;
  }
}

const res = trans(obj);
console.log(res);
