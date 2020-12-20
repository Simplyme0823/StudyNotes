/** @format */
class Observe {
  constructor(obj) {
    this.value = obj;
    // obj.__ob__ = JSON.stringify(obj);
    obj.__ob__ = this;
    const keys = Object.keys(obj);
    const len = keys.length;
    // console.log(obj);
    for (let i = 0; i < len; i++) {
      defineReactive(obj, keys[i]);
    }
  }
}

function observe(obj) {
  if (Object.prototype.toString.call(obj) !== "[object Object]") {
    return;
  }
  return new Observe(obj);
}

function defineReactive(obj, key) {
  const get = Object.getOwnPropertyDescriptor(obj, key).get;
  const set = Object.getOwnPropertyDescriptor(obj, key).set;
  let val = obj[key];
  const child = observe(val);
  return Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function () {
      // console.log("child", child);
      return get ? get() : val;
    },
    set: function (newVal) {
      if (set) {
        set(newVal);
      } else {
        val = newVal;
      }
    },
  });
}

const res = observe({ a: { b: { c: { d: "d" } } } });

console.log(res.value.__ob__);
