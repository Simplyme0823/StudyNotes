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

  node.left = zuzhuang(prev.slice(1, index + 1), mid.slice(0, index));
  node.right = zuzhuang(prev.slice(index + 1), mid.slice(index + 1));

  return node;
}

// 给出 中序 后序 组装二叉树
function zuzhuang(mid, post) {
  if (!mid.length || !post.length) return null;
  const rootVal = post[post.length - 1];
  const node = new TreeNode(rootVal);
  let index;
  for (let i = 0; i < mid.length; i++) {
    if (mid[i] === rootVal) {
      index = i;
    }
  }

  node.left = zuzhuang(prev.slice(0, index), mid.slice(0, index));
  node.right = zuzhuang(prev.slice(index + 1), mid.slice(index + 1));

  return node;
}
