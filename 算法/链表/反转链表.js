/** @format */

//
// function reverse(head) {
//   if (!head) return;
//   let node = head;
//   let prevNode = null;
//   while (node.next) {
//     let nextNode = node.next;
//     node.next = prevNode;
//     prevNode = node;
//     node = nextNode;
//   }
//   node.next = prevNode;
//   return node;
// }

// 就地更新
function reverse(head) {
  let node = head;
  let prevNode = null;
  while (node.next) {
    let nextNode = node.next;
    node.next = prevNode;
    prevNode = node;
    node = nextNode;
  }
  // 注意：原尾部的next是null，所以需要最后手动添加tail的next
  node.next = prevNode;
  return node;
}
