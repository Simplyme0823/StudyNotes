/** @format */

class SuperType {
  static staticMethod() {}
  instanceMethod() {}
}

class Subtype extends SuperType {
  constructor() {
    super();
  }
  static test() {
    super.staticMethod();
  }

  fdasf() {
    super.instanceMethod();
  }
}

const subIns = new Subtype();
Subtype.test();

const obj = {
  home() {
    return super.instanceMethod();
  },
};

Object.setPrototypeOf(obj, SuperType.prototype);
obj.home();
