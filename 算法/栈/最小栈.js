/** @format */

class minStack {
  constructor() {
    this.stack = [];
    this.supStack = [];
  }

  push(ele) {
    this.stack.push(ele);
    // 栈顶
    if (
      this.supStack.length === 0 ||
      ele <= this.supStack[this.supStack.length - 1]
    ) {
      this.supStack.push(ele);
    }
  }

  pop() {
    const removeEle = this.stack.pop();
    if (removeEle === this.supStack[this.supStack.length - 1]) {
      this.supStack.pop();
    }
    return removeEle;
  }

  getMin() {
    return this.supStack[this.supStack.length - 1];
  }
}
