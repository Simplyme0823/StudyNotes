/** @format */
// 1
Promise.resolve(1).then(2).then(Promise.resolve(3)).then(console.log);

// 3
Promise.resolve(1)
  .then(2)
  .then(() => Promise.resolve(3))
  .then(console.log);
