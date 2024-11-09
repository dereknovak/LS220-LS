/* 

10:26 // 10:39
- Very easy

PROBLEM
I: The head of a LL
O: The head of a LL, with penultimate node removed

RULES
- Can only pass through LL once
    - Only one variable?
- Guaranteed to have 2 nodes

EXAMPLE
[1, 2, 3, 4]
1 -> 2 -> 4 -> null

DATA STRUCTURE
- Use a LL
    - Use a dummy in case head is removed (2 elements)
    - Use 2 pointers
        - curr pointer sees where null is (use .next)
        - prev pointer will allow a skip over penultimate node

d [1, 2, 3, 4] null
      p     c

d [1, 2] null
p     c

ALGORITHM
1. Setup
    - Initialize dummy to a new node
    - Set dummy.next to the head
    - Initialize curr to head.next
    - Initialize prev to dummy
2. Iterate through LL until curr.next is pointing to null
    - Use while loop (while curr.next is not null)
        - Increment prev
        - Increment curr
3. Connect prev to curr
*/

function removeSecondToLast(head) {
  let dummy = new ListNode();
  dummy.next = head;
  
  let curr = head.next;
  let prev = dummy;

  while (curr.next) {
    prev = prev.next;
    curr = curr.next;
  }

  prev.next = curr;
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

// Test cases
let list1 = createLinkedList([1, 2, 3, 4, 5]);
let list2 = createLinkedList([1, 2]);
let list3 = createLinkedList([3, 2, 1]);
let list4 = createLinkedList([1, 2, 3, 4]);
let list5 = createLinkedList([10, 20, 30, 40, 50, 60]);

console.log("Original lists:");
printLinkedList(list1);
printLinkedList(list2);
printLinkedList(list3);
printLinkedList(list4);
printLinkedList(list5);

console.log("\nAfter removing second-to-last node:");
printLinkedList(removeSecondToLast(list1)); // Expected: 1 -> 2 -> 3 -> 5 -> null
printLinkedList(removeSecondToLast(list2)); // Expected: 2 -> null
printLinkedList(removeSecondToLast(list3)); // Expected: 3 -> 1 -> null
printLinkedList(removeSecondToLast(list4)); // Expected: 1 -> 2 -> 4 -> null
printLinkedList(removeSecondToLast(list5)); // Expected: 10 -> 20 -> 30 -> 40 -> 60 -> null