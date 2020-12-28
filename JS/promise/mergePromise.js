/** @format */

const timeout = ms =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, ms);
  });

const axjx1 = () =>
  timeout(2000).then(() => {
    console.log(1);
    return 1;
  });

const axjx2 = () =>
  timeout(1000).then(() => {
    console.log(2);
    return 2;
  });

const axjx3 = () =>
  timeout(2000).then(() => {
    console.log(3);
    return 3;
  });

// const mergePromise = ajaxArray => {
//   // reduce串行适用于promise链
//   const data = [];
//   function queue(promiseArr, limit, index) {
//     return Promise.all(
//       promiseArr.slice(index, (index + 1) * limit).map(item => item()),
//     ).then(res => {
//       data.push(...res);
//       index++;
//       if (index * limit >= ajaxArray.length) {
//         return Promise.resolve(data);
//       } else {
//         queue(promiseArr, limit, index);
//       }
//     });
//   }
//   queue(ajaxArray, 1, 0);
// };

const mergePromise = ajaxArray => {
  // reduce串行适用于promise链
  const data = [];
  let sequence = Promise.resolve();
  // 如何改造成多个？？
  ajaxArray.forEach(p => {
    sequence = sequence.then(p).then(res => {
      data.push(res);
      return data;
    });
  });

  return sequence;
};

mergePromise([axjx1, axjx2, axjx3]).then(data => {
  console.log("done");
  console.log(data);
});
