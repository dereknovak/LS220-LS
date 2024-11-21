/* 

10:28 // 10:43
- Lots of debugging afterwards. Solved without any hints.
- Solution is basically the same. Dequeue is slightly different, but just rearranged.
*/

class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.back = null;
  }
  peek() {
    return this.front ? this.front.val : null;
  }

  enqueue(value) {
    const newNode = new ListNode(value);

    if (this.back) {
      this.back.next = newNode;
      this.back = newNode;
    } else {
      this.front = this.back = newNode;
    }
  }

  dequeue() {
    const removedNode = this.front;

    if (removedNode) {
      this.front = removedNode.next;
    }

    if (!this.front) {
      this.back = null;
    }

    return removedNode ? removedNode.val : null;
  }
}

const myQueue = new Queue();
myQueue.enqueue(1);
console.log('Front element:', myQueue.peek());  // logs 'Front element: 1'
myQueue.enqueue(2);
console.log('Front element:', myQueue.peek());  // logs 'Front element: 1'
myQueue.enqueue(3);
console.log('Front element:', myQueue.peek());  // logs 'Front element: 1'
myQueue.dequeue();
console.log('Front element after dequeue:', myQueue.peek());  // logs 'Front element after dequeue: 2'
myQueue.dequeue();
console.log('Front element after dequeue:', myQueue.peek());  // logs 'Front element after dequeue: 3'
myQueue.dequeue();
console.log('Peek on empty queue:', myQueue.peek());  // logs 'Peek on empty queue: null'
console.log('`back` on empty queue:', myQueue.back);  // logs '`back` on empty queue: null'