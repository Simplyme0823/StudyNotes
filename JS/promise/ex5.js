/** @format */

Promise.resolve()
  .then(() => {
    return new Error("error");
  })
  .then(res => {
    console.log(res);
  })
  .catch(err => {
    console.log(err);
  });
