/** @format */

function deep(head) {
  if (!head) return 0;

  return 1 + Math.max(deep(root.left), deep(root.right));
}

function deep_(head) {
  let deep = 0;
  let queue = [head];
  while (queue.length) {
    let levelNumber = queue.length;
    deep++;
    while (levelNumber--) {
      let node = queue.shift();
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }
  return deep;
}
