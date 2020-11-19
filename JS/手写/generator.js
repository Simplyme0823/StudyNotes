/** @format */

const fs = require("fs");
function* g() {
  try {
    val = yield fs.openSync("fdsafdsaf");
    console.log(val);
  } catch (err) {
    console.log(err);
  }
}

const task = g();
task.next();
task.next();
