/** @format */

const man = {
  name: "jscoder",
  age: 26,
};

const proxy = new Proxy(man, {
  get(target, propery) {
    if (propery in target) {
      return target[propery];
    } else {
      throw new Error("fdsa");
    }
  },
});
