/** @format */

function pathSum(root, sum) {
  let path = [];
  function preOrder(node, currentSum, res) {
    if (!node) return false;
    let rootVal = node.val;
    res.push(rootVal);
    if (!node.left && !node.right && currentSum === rootVal) {
      path.push([...res]);
    } else {
      preOrder(node.left, currentSum - rootVal, res);
      preOrder(node.right, currentSum - rootVal, res);
    }
    res.pop();
  }
  preOrder(root, sum, []);
  return path;
}
const tree = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 3,
      right: null,
    },
  },
  right: {
    val: 4,
    left: {
      val: 5,
      right: { val: 6, right: null },
    },
  },
};

const res = pathSum(tree, 6);
console.log(res);
