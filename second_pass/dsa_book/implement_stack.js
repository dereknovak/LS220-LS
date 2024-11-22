/* 

5:31 // 5:46
- Pointed the stack `next` values the wrong direction

*/

class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }
  peek() {
    if (this.top) return this.top.val;
    return null;
  }

  push(value) {
    let newNode = new ListNode(value);
    let oldNode = this.top;

    if (oldNode) {
      newNode.next = oldNode;
      this.top = newNode;
    } else {
      this.top = newNode;
    }
  }

  pop() {
    if (this.top) {
      let removedNode = this.top;
      this.top = this.top.next;

      return removedNode;
    }

    return null;
  }
}

const myStack = new Stack();
myStack.push(1);
console.log('Top element:', myStack.peek());  // logs 'Top element: 1'
myStack.push(2);
console.log('Top element:', myStack.peek());  // logs 'Top element: 2'
myStack.push(3);
console.log('Top element:', myStack.peek());  // logs 'Top element: 3'
myStack.pop();
console.log('Top element after pop:', myStack.peek());  // logs 'Top element after pop: 2'
myStack.pop();
console.log('Top element after pop:', myStack.peek());  // logs 'Top element after pop: 1'
myStack.pop();
console.log('Peek on empty stack:', myStack.peek());    // logs 'Peek on empty stack: null'