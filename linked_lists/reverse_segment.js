/* 

9:34 // 10:38
- Had to use both hints, but solved without looking at walkthrough
- Did have to reference how to reverse a LL
- Spent about 8 mins at the end debugging return values
    - Return head vs prev vs dummy

PROBLEM
I: The head of a LL
I: A number, representing a starting node to reverse
I: A number, representing an ending node to reverse
O: Return the head of the modified list

RULES
- List is guaranteed to have at least 1 node
- Start/End are guaranteed to be within it
    - Start/End could be 1
- List is 1-indexed
    - 1, 2, 3...

EXAMPLE
[1, 2, 3, 4, 5, 6] // start = 3 // end = 5
=> [1, 2, 5, 4, 3, 6] -> null

DATA STRUCTURE
- A singly LL
    - Use a dummy node (head may change)
    - prev
    - curr
    - counter to keep track of node index

[1, 2, 3, 4, 5, 6] // start = 3 // end = 5 (1 -> 2 -> 5 -> 4 -> 3 -> 6 -> null)
d [1, 2, 3, 4, 5, 6] null
      p  c  n
nodeIdx = 3
d -> 1 -> 2 -> 5 ->

ALGORITHM
1. Setup
    - Initialize dummy to new Node
    - Initialize dummy.next to head
    - Initialize prev to dummy
    - Initialize curr to head
    - Initialize nodeIdx to 1
2. Loop through LL until the start
    - While nodeIdx < start
        - Increment prev
        - Increment curr
        - Increment nodeIdx
3. Reverse the nodes from start to end
    - Use reverseNodes HELPER (head = curr)
    - Assign prev.next to returned head
3. Return the LL head

HELPER
reverseNodes(head, nodeIdx, end)
- Declare nextNode
- While nodeIdx <= end
    - Assign nextNode to curr.next
    - Assign curr to prev
    - Increment curr
    - Increment prev
    - Increment nodeIdx
- Assign prev.next to head
- Return the new head (prev)
*/

function reverseNodes(head, length) {
  let curr = head;
  let prev = null;
  let nextNode;

  for (let i = 0; i <= length; i++) {
    nextNode = curr.next;
    curr.next = prev;
    prev = curr;
    curr = nextNode;
  }

  head.next = nextNode;
  return prev;
}

function reverseSegment(head, start, end) {
  let dummy = new ListNode();
  dummy.next = head;

  let prev = dummy;
  let curr = head;

  for (let i = 1; i < start; i++) {
    prev = curr;
    curr = curr.next;
  }

  prev.next = reverseNodes(curr, end - start);
  return dummy.next;
}

class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

function printLinkedList(head) {
  let currentNode = head;
  let listStr = '';
  while (currentNode !== null) {
    listStr += currentNode.val + ' -> ';
    currentNode = currentNode.next;
  }
  listStr += 'null';
  console.log(listStr);
}

function createLinkedList(arr) {
  let head = new ListNode(0);
  let current = head;
  arr.forEach(val => {
    current.next = new ListNode(val);
    current = current.next;
  });
  return head.next;
}

let list1 = createLinkedList([1, 3, 5, 7, 9]);
let list2 = createLinkedList([1, 2, 3]);
let list3 = createLinkedList([1]);
let list4 = createLinkedList([1, 2, 3, 4, 5, 6]);
let list5 = createLinkedList([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

printLinkedList(reverseSegment(list1, 2, 4)); // Expected: 1 -> 7 -> 5 -> 3 -> 9 -> null
printLinkedList(reverseSegment(list2, 1, 3)); // Expected: 3 -> 2 -> 1 -> null
printLinkedList(reverseSegment(list3, 1, 1)); // Expected: 1 -> null
printLinkedList(reverseSegment(list4, 3, 5)); // Expected: 1 -> 2 -> 5 -> 4 -> 3 -> 6 -> null
printLinkedList(reverseSegment(list5, 4, 7)); // Expected: 1 -> 2 -> 3 -> 7 -> 6 -> 5 -> 4 -> 8 -> 9 -> 10 -> null