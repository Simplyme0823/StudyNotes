/** @format */

function walk(head) {
  if (!head) return;
  let node = head;
  // prev
  walk(node.left);
  // in
  walk(node.right);
  // post
}

function xunhuan(head) {
  let queue = [head];
  while (queue.length) {
    let node = queue.shift();
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }
}
