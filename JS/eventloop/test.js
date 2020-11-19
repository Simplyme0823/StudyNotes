/** @format */

new Promise(resolve => {
  console.log("r1-1");
  resolve();
  console.log("r1-2");
})
  .then(() => {
    return new Promise(resolve => {
      console.log("then1-1");
      resolve();
    }).then(() => {
      console.log("then1-1-1");
    });
  })
  .then(() => {
    console.log("then1-2");
  });

new Promise(resolve => {
  console.log("r2-1");
  resolve();
  console.log("r2-2");
})
  .then(() => {
    console.log("then2-1");
  })
  .then(() => {
    console.log("then2-2");
  });
