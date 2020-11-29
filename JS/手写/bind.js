/** @format */

//  Yes, it does work with `new (funcA.bind(thisArg, args))`
if (!Function.prototype.bind)
  (function () {
    Function.prototype.bind = function (otherThis, ...baseArgs) {
      if (typeof this !== "function") {
        // closest thing possible to the ECMAScript 5
        // internal IsCallable function
        throw new TypeError(
          "Function.prototype.bind - what is trying to be bound is not callable",
        );
      }

      const fToBind = this;
      const fNOP = function () {};
      if (this.prototype) {
        fNOP.prototype = this.prototype;
      }
      const fBound = function (...args) {
        return fToBind.apply(
          fNOP.prototype.isPrototypeOf(this) ? fToBind : otherThis,
          baseArgs.concat(args),
        );
      };
      fBound.prototype = new fNOP();
      return fBound;
    };
  })();

Function.prototype.myBind = function (context, ...args1) {
  const self = this;
  const fNOP = function () {};
  if (self.prototype) {
    fNOP.prototype = self.prototype;
  }

  function Fn(...args2) {
    self.apply(this instanceof fNOP ? self : context, args1.concat(args2));
  }
  Fn.prototype = new fNOP();
  return Fn;
};

function test() {
  console.log(this);
}

test.myBind({ name: "test" })();
