/** @format */

function run(gen) {
  let task = gen();
  function step(next) {
    return new Promise((resolve, reject) => {
      let result;
      try {
        result = next();
      } catch (err) {
        return reject(err);
      }
      if (result.done) {
        return resolve(result.value);
      }

      return Promise.resolve(result.value)
        .then(res => step(() => task.next(res)))
        .catch(err => step(() => task.throw(err)));
    });
  }

  return step(() => {
    return task.next();
  });
}

function* test() {
  yield 1;
  yield 2;
}
const re = test();
const val = re.next();

run(test);

function compose(middle) {
  return function (context, next) {
    let index = -1;
    return dispatch(0);

    function dispatch(i) {
      if (i <= index) {
        return Promise.reject("call twice");
      }
      index = i;
      const len = middle.length;
      let fn = middle[i];
      if (i > len) return;
      if (i === len) {
        fn = next;
      }
      if (!fn) return Promise.resolve();
      try {
        return Promise.resolve().then(fn(context, dispatch.bind(i + 1)));
      } catch (err) {
        return Promise.reject(err);
      }
    }
  };
}

function express(middle) {
  if (!middle || !Array.isArray(middle)) return;
  if (middle.length === 1) return middle[0];

  return middle.reduce((prev, cur) => {
    return (...arg) => prev(cur(...arg));
  });
}
const cb1 = (...args) => {
  console.log(args);
  return "cb1";
};

const cb2 = (...args) => {
  console.log(args);
  return "cb2";
};

const testMiddle = [cb1, cb2];
const res = express(testMiddle);
res("est");

//

Array.prototype.myReduce = function () {
  const O = Object(this);
  let k = 0;
  let value;
  const len = this.length;
  const fn = arguments[0];
  if (arguments.length >= 2) {
    value = arguments[1];
  } else {
    value = o[k];
    k++;
  }

  while (k < len) {
    if (k in O) {
      value = fn(value, O[k], k, this);
    }
    k++;
  }
};
