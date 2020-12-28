/** @format */

const promise = Promise.resolve().then(() => {
  return promise;
});

promise.catch(err => {
  console.log(err);
});
