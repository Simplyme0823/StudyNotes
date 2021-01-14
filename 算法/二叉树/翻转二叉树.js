/** @format */

function invertTree(node) {
  if (!node) return null;
  const temp = invertTree(node.left);
  node.left = invertTree(node.right);
  node.right = temp;
  return node;
}
