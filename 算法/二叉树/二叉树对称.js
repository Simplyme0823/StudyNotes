/** @format */

// 算法错误原因 没有理解镜像对称的意思
// 指的是左子树的右边与右子树的左边  左子树的左边与右子树的右边值相等

// 不是一个左子树的左边与右边相等

// function isSymmetry(root) {
//   if (!root || !root.left || !root.right) {
//     return false;
//   }
//   if (root.left.val === root.right.val) {
//     return isSymmetry(root.left) && isSymmetry(root.right);
//   } else {
//     return false;
//   }
// }

var isSymmetric = function (root) {
  if (!root) return true;

  return __isSymmetric(root.left, root.right);
};

function __isSymmetric(t1, t2) {
  if (!t1 && !t2) return true;
  if (!t1 || !t2) return false;
  return (
    t1.val === t2.val &&
    __isSymmetric(t1.left, t2.right) &&
    __isSymmetric(t1.right, t2.left)
  );
}
