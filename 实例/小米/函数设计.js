/** @format */

// 输入一个树结构字符串，将含有多个子节点的节点以数组形式输出

const root = {
  node: "root",
  next: [
    { node: "second_root", next: { node: "third" } },
    {
      node: "second_child",
      next: [
        {
          node: "secord_child_1",
        },
      ],
    },
  ],
};

const input = JSON.stringify(root);
function run(str) {
  const res = eval(`(${str})`);

  const list = [];
  solution(res);
  return list;
  function solution(node) {
    if (node.next) {
      const len = node.next.length;
      if (len) {
        for (let i = 0; i < len; i++) {
          list.push(node.node);
          solution(node.next[i]);
        }
      } else {
        solution(node.next);
      }
    }
  }
}
const res = run(input);

console.log(res);
