/** @format */

//给出中序 前序 组装二叉树

function zuzhuang(prev, mid) {
  if (!prev.length || !mid.length) return null;
  const rootVal = prev[0];
  const node = new TreeNode(rootVal);
  let index;
  for (let i = 0; i < mid.length; i++) {
    if (mid[i] === rootVal) {
      index = i;
    }
  }

  node.left = zuzhuang(prev.slice(1, i + 1), mid.slice(0, i));
  node.right = zuzhuang(prev.slice(i + 1), mid.slice(i + 1));

  return node;
}
