/** @format */

let fullname = "1";
var obj = {
  fullname: "2",
  prop: {
    fullname: "3",
    // 改成function呢？
    getFullname: () => {
      return this.fullname;
    },
  },
};
console.log(obj.prop.getFullname()); // undefined
var test = obj.prop.getFullname;
console.log(test()); // undefined

const test1 = {
  a: {
    b: {
      c: {
        d() {
          console.log(this);
        },
        e: () => {
          console.log(this);
        },
      },
    },
  },
};

test1.a.b.c.d(); //{d: [Function: d], e: [Function: e]}

test1.a.b.c.e(); // {}
