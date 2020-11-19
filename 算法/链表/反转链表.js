/** @format */

function reverse(head) {
  if (!head) return;
  let node = head;
  let prevNode = null;
  while (node.next) {
    let nextNode = node.next;
    node.next = prevNode;
    prevNode = node;
    node = nextNode;
  }
  node.next = prevNode;
  return node;
}
