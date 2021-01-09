/** @format */

var pathSum = function (root, sum) {
  let res = [];
  help(root, sum, res, []);
  return res;
};

function help(root, sum, res, arr) {
  if (!root) return;
  arr.push(root.val);
  // 叶子节点
  if (root.left === null && root.right === null && root.val === sum) {
    // 注意这里不能直接存放arr
    // 直接存放arr的话这里存的是数组的引用
    res.push([...arr]);
  }
  help(root.left, sum - root.val, res, arr);
  help(root.right, sum - root.val, res, arr);
  // 上面两步都结束之后要把arr出栈进行回溯  因为执行到这来说明此路不通 需要弹出栈 回溯
  arr.pop();
}
