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
      const fBound = function (...args) {
        return fToBind.apply(
          // 考虑到new fBound的情况
          fNOP.prototype.isPrototypeOf(this) ? this : otherThis,
          baseArgs.concat(args),
        );
      };

      if (this.prototype) {
        // Function.prototype doesn't have a prototype property
        fNOP.prototype = this.prototype;
      }

      fBound.prototype = new fNOP();

      return fBound;
    };
  })();
