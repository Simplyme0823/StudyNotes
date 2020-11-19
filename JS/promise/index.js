/** @format */

Promise.resolve()
  .then(() => {
    console.log("then1");
    return new Promise(resolve => setTimeout(() => resolve())).then(() =>
      setTimeout(() => {
        console.log("then1-1");
      }),
    );
  })
  .then(() => {
    console.log("then2");
  });
