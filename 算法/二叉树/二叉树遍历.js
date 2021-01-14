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

// 层次遍历

function snake(head) {
  let res = [];
  let queue = [head];
  let depth = 0;
  while (queue.length) {
    let old = queue.slice();
    queue.length = 0;

    if (depth % 2 === 0) {
      old.forEach(item => {
        res.push(item.val);
      });
    } else {
      old.forEach((item, index) => {
        res.push(old[old.length - index].val);
      });
    }
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
    depth++;
  }
}
