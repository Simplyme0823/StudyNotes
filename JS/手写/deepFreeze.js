/** @format */

function deepFreeze(obj) {
  let propName = Object.getOwnPropertyNames(obj);

  for (let name of propName) {
    let value = obj[name];
    object[name] =
      value && typeof value === "object" ? deepFreeze(value) : value;
  }

  return Object.freeze(obj);
}
