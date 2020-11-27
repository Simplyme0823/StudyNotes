/** @format */

// 1 4 10 5 6 7 2 9 3 8  ×

// 1 4 10 5 6 7 2 3 9 8  √
function fn() {
  console.log(1);
  setTimeout(() => {
    console.log(2);
    Promise.resolve().then(() => {
      console.log(3);
    });
  });
  new Promise((resolve, reject) => {
    console.log(4);
    resolve(5);
  }).then(data => {
    console.log(data);
    Promise.resolve()
      .then(() => {
        console.log(6);
      })
      .then(() => {
        console.log(7);
        setTimeout(() => {
          console.log(8);
        }, 0);
      });
  });

  setTimeout(() => {
    console.log(9);
  }, 0);
  console.log(10);
}
fn();
