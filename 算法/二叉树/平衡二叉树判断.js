/** @format */

// 节点的左子树与右子树高度差小于2 且左子树平衡 且右子树平衡
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
