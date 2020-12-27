/** @format */

function isBalanced(root) {
  if (!root) return true;
  return (
    isBalanced(root.left) &&
    isBalanced(root.right) &&
    Math.abs(height(node.left), height(node.right)) < 2
  );
}

// 节点高度差不超过1
function height(node) {
  if (!node) return 0;
  return Math.max(height(node.left), height(node.right)) + 1;
}
