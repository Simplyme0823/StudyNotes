/** @format */

function foo(arg1 = arg2, arg2) {
  // 其实foo这行 就已经声明了arg1  arg2
  // 临时死区
  // arg1 = arg2
  // let arg2 = arg2
  console.log(arg1, arg2);
}

// null arg2
foo(null, "arg2");

// ReferenceError: Cannot access 'arg2' before initialization
foo(undefined, "arg2");
