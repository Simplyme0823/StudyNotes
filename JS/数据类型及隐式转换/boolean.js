/** @format */

console.log([] == false, {} == false, !![]);

function loop(root, arr, sum, res) {
  if (!root) return;
  const val = root.val;
  arr.push(val);
  if (!root.left && !root.right && sum === val) {
    res.push([...arr]);
  }
  loop(root.left, arr, sum - root.left, res);
  loop(root.right, arr, sum - root.right, res);
  arr.pop();
}
