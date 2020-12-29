/** @format */
function log(i) {
  return Promise.reject("errorIndex: " + i);
}
async function test() {
  for (let i = 0; i < 10; i++) {
    try {
      res = await log(i);
    } catch (err) {
      console.log(err);
    }
  }
}

test();
