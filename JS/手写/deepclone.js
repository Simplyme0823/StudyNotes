/** @format */

// JSON.stringify与JSON.parse缺点：拷贝函数，循环引用等情况

// 丐版 只考虑数组与对象
function deepClone(orign, target) {
  var tar = target || {};
  var toString = Object.prototype.toString;
  // orign只考虑了 对象 与 数组
  for (var key in orign) {
    if (orign.hasOwnProperty(key)) {
      //  typeof null 也是object
      if (typeof origin[key] === "object" && origin[key] !== null) {
        tar[key] = toString.call(origin[key] === "[object Array]" ? [] : {});
        deepClone(origin[key], tar[key]);
      } else {
        tar[key] = origin[key];
      }
    }
  }
}

function deepClone(origin) {
  if (typeof origin === "object" && origin !== null) {
    const cloneVal = Array.isArray(origin) ? [] : {};
    for (const key in origin) {
      if (origin.hasOwnProperty(key)) {
        cloneVal[key] = deepClone(origin);
      }
    }
    return cloneVal;
  } else {
    return origin;
  }
}

// 考虑循环引用

function deepClone(origin, map = new Map()) {
  if (typeof origin === "object" && origin !== null) {
    if (map.get(origin)) {
      return map.get(origin);
    }

    const isArray = Array.isArray(origin);
    const cloneVal = isArray ? [] : {};

    map.set(origin, cloneVal);

    const keys = isArray ? undefined : Object.keys(origin);
    forEach(keys || origin, (val, key) => {
      if (keys) {
        key = val;
      }
      cloneVal[key] = deepClone(origin[key], map);
    });
    return cloneVal;
  } else {
    return origin;
  }
}

function forEach(array, iteratee) {
  let index = -1;
  const length = array.length;
  while (++index < length) {
    iteratee(array[index], index);
  }
  return array;
}

// 递归改为循环

function deepClone(origin, map = new Map()) {
  let root = {};

  const stack = [
    {
      key: undefined,
      parent: root,
      data: origin,
    },
  ];

  while (stack.length) {
    const current = stack.shift();
    const key = current.key;
    const parent = current.parent;
    const data = current.data;

    let res = parent;
    if (typeof key !== "undefined") {
      res = parent[key] = {};
    }

    if (map.get(data)) {
      parent[key] = map.get(data);
      // 跳過
      continue;
    }

    map.set(data, res);

    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        if (typeof data[key] === "object") {
          stack.push({ key, parent: res, data: data[key] });
        } else {
          res[key] = data[key];
        }
      }
    }
  }
  return root;
}

const target = {
  field1: 1,
  field2: [2, 3],
  field3: {
    field4: 4,
  },
};
target.filed5 = target;

const res = deepClone(target);
console.log(res);
