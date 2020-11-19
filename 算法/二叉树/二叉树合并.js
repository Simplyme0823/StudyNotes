/** @format */

// const mergeTree = (t1, t2) => {
//   if (!t1 && !t2) {
//     return;
//   } else if (t1.value && t2.value) {
//     t1.value = t1.value + t2.value;
//   } else {
//     t1.value = t1.value || t2.value;
//   }
//   mergeTree(t1.left, t2.left);
//   mergeTree(t1.right, t2.right);
// };

// 递归终止条件
const mergeTree = (t1, t2) => {
  if (!t1 || !t2) {
    return t1 || t2;
  }

  t1.val += t2.val;
  t1.left = mergeTree(t1.left, t2.left);
  t1.right = mergeTree(t1.right, t2.right);
  return t1;
};
