/** @format */
const arrayProto = Array.prototype;

const arrayMethods = Object.create(arrayProto);

// 重写部分数组方法
// 这些数组方法的特点：对元素有增删，不会返回新的值
["push", "pop", "shift", "unshift", "splice", "sort", "reverse"].forEach(
  method => {
    arrayMethods[method] = function (...args) {
      const res = arrayProto[method].apply(this, args);
      // 对于增加的元素进行观察
      let inserted;
      switch (method) {
        case "push":
        case "unshift":
          inserted = args;
          break;
        case "splice":
          inserted = args.slice(2);
          break;
      }
      if (inserted) ob.observeArray(inserted);
      // childOb，调用以上方法的时候要通过childOb进行派发更新
      const ob = this.__ob__;
      ob.dep.notify();
      return res;
    };
  },
);

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
// function observe(value, asRootData) {
function observe(value) {
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
  // if (asRootData && ob) {
  //   ob.vmCount++;
  // }
  return ob;
}

class Observer {
  constructor(value) {
    this.value = value;
    this.dep = new Dep();
    this.vmCount = 0;
    // 数组也可以添加__ob__属性
    Object.defineProperty(value, "__ob__", this);

    // 开启递归
    if (Array.isArray(value)) {
      // 改写原型对象
      value.__proto__ = arrayMethods;
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

  // 1. 开启递归，得到下一层元素的__ob__值，
  // 如对象obj = {a:{b:"b"}, c:"c"}, obj.__ob__.value为{a:{b:"b"}, c:"c"}
  let childOb = !shllow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter() {
      const value = getter ? getter.call(obj) : val;
      if (Dep.target) {
        // 当前元素对应的值进行依赖收集
        dep.depend();
        if (childOb) {
          // childOb为Observer实例，该实例内部也有Dep实例
          // 2. 子属性也要进行依赖收集
          // 2.1 对于数组而言，需要靠val.__ob__.dep来进行依赖收集与派发更新
          // 2.2 vue.set vue.delete会用到val.__ob__

          // 3. 取值的时候 如 obj.a.b.c，这些a/b/c层级的值都会重新进行依赖收集
          childOb.dep.depend();
          // 主要考虑到对象数组，需要每个对象元素都进行依赖收集
          // 该过程也是递归的
          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }
      return value;
    },
    set: function reactiveSetter(newVal) {
      const value = getter ? getter.call(obj) : val;
      // ???
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return;
      }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      // 4. 更新childOb值，防止再次取childOb值的时候取到脏数据
      childOb = observe(newVal);
      dep.notify();
    },
  });
}

function dependArray(value) {
  const len = value.length;
  for (let i = 0; i < len; i++) {
    e = value[i];
    // 这里的e.__ob__其实也是childOb
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

function isValidArrayIndex(val) {
  // 转化成数字
  const n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val);
}

function set(target, key, val) {
  // 数组index
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val;
  }
  // target中key已经存在 已经加入响应式系统了 直接更改值就行了
  if (key in target && !(key in Object.prototype)) {
    target[key] = val;
    return val;
  }
  // target中添加新的key
  const ob = target.__ob__;
  // 但是没有加入响应式中，值添加后，不会触发更新
  if (!ob) {
    target[key] = val;
    return val;
  }
  // 加入响应式系统
  defineReactive(ob.value, key, val);
  ob.dep.notify();
  return val;
}

function del(target, key) {
  // 对于数组，直接删除
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return;
  }
  const ob = target.__ob__;
  // key不存在于target
  if (!Object.prototype.hasOwnProperty(target, key)) {
    return;
  }
  delete target[key];
  if (!ob) {
    return;
  }
  // 派发更新
  ob.dep.notify();
}
