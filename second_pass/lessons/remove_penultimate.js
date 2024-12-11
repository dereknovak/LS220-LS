/* 

3:59 // 4:10

PROBLEM
I: The head of a LL
O: The head of the modified LL

RULES
- Will always receive at least 2 nodes
- If 2 nodes, the 2nd node will become the new head
    - Dummy

EXAMPLE
Input: 1 -> 2 -> 3 -> 4 -> 5
=> 1 -> 2 -> 3 -> 5

Input: 1 -> 2
=> 2

DATA STRUCTURE
- Linked List
    - 2 Pointers
        1: prev
        2: node.next

d -> 1 -> 2 -> 3 -> 4 -> 5 -> null
               p         c

d -> 1 -> 2 -> null
p         c

ALGORITHM
1. Setup
    - Create a dummy node
    - Initialize prev to dummy node
    - Initialize curr to head.next
2. Determine how deep LL is
    - Loop until curr.next is null
        - Increment prev
        - Increment curr
3. Link prev to the last node of LL
4. Return dummy.next

*/

function removeSecondToLast(head) {
  const dummy = new ListNode(0, head);
  let prev = dummy;
  let curr = head.next;

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