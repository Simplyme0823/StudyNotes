/** @format */

// TODO
function bianli(root) {
  if (!root) return [];
  let queue = [root];
  let depth = 0;
  let res = [];
  while (queue.length) {
    const currentLevel = queue.slice();
    queue.length = 0;
    currentLevel.forEach(item => {
      item.left && queue.push(item.left);
      item.right && queue.push(item.right);
      item.val && res.push(item.val);
    });
    depth++;
  }
}
