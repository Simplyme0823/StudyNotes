/** @format */

// 1 9 5 0 6 2 7 4 8 3  √

// 1 9 5 0 6 2 7 4 8 3  √
(function () {
  setTimeout(() => {
    console.log(0);
  });
  new Promise(resolve => {
    console.log(1);
    setTimeout(() => {
      resolve();
      Promise.resolve().then(() => {
        console.log(2);
        setTimeout(() => {
          console.log(3);
        });
        Promise.resolve().then(() => console.log(4));
      });
    });
    Promise.resolve().then(() => console.log(5)); // m1
  }).then(() => {
    console.log(6);
    Promise.resolve().then(() => console.log(7));
    setTimeout(() => {
      console.log(8);
    });
  });
  console.log(9);
})();
