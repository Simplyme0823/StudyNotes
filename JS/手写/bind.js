/** @format */

Function.prototype.myBind = function (context, ...args1) {
  const self = this;
  function Fn(...args2) {
    return self.apply(
      // 注意这里的this
      this instanceof Fn ? this : context,
      args1.concat(args2),
    );
  }
  Fn.prototype = Object.create(this.prototype);
  return Fn;
};

function test() {
  console.log(this);
}

test.myBind({ name: "test" })();
const testBind = test.myBind({ name: "test" });
const ins = new testBind();
console.log(ins);
