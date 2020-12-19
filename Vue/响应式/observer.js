/** @format */

export function isObject(obj) {
  return obj !== null && typeof obj === "object";
}

function isPlainObject(obj) {
  return Object.prototype.toString.call(obj) === "[object Object]";
}

function hasOwn(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

// 1. initData ---> 调用observe 观察vm.data数据
// 2. observer ---> new Observe
// 3. Observe constructor ---> defineReactive
function observe(value, asRootData) {
  // 非数组或非对象 非vnode
  if (!isObject(value) || value instanceof VNode) {
    return;
  }

  if (hasOwn(value, "__ob__") && value.__ob__ instanceof Observe) {
    ob = value.__ob__;
  } else if (
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue
  ) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob;
}

class Observer {
  constructor(value) {
    this.value = value;
    this.dep = new Dep();
    this.vmCount = 0;
    // 数组也可以添加__ob__属性
    Object.defineProperty(value, "__ob__", this);
    if (Array.isArray(value)) {
      this.observeArray(value);
    } else {
      this.walk(value);
    }
  }
  // plainObject
  walk(obj) {
    const keys = Object.keys(obj);
    for (let i = 0; i < keys.length; i++) {
      defineReactive(obj, keys[i]);
    }
  }

  observeArray(items) {
    for (let i = 0, i = items.length; i < length; i++) {
      observe(items[i]);
    }
  }
}

function defineReactive(obj, key, val, customSetter, shllow) {
  const dep = new dep();
  // 不可配置就不会加入响应式
  const property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return false;
  }
  const getter = property && property.get;
  const setter = property && property.set;

  if ((!getter || setter) && arguments.length === 2) {
    val = obj[key];
  }
  // 对于深层
  let childOb = !shllow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter() {
      const value = getter ? getter.call(obj) : val;
      if (Dep.target) {
        // 依赖收集
        dep.depend();
        if (childOb) {
          // childOb为Observer实例，该实例内部也有Dep实例
          // 子属性也要进行依赖收集
          childOb.dep.depend();
          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }
      return value;
    },
  });
}
