/* 

4:52 // 5:23
- Tried adding in a `prev` variable on first attempt, which created a lot of issues.
- Most of time was spent trying to figure out a LL with even nodes, eventually rewriting algorithm with just the `curr` variable.
- Validation step was unnecessary

PROBLEM
I: Head of a singly LL
O: Head of the input singly LL, with every even node removed

RULES
- Remove every node, alternating, starting from the second
    - 1, 2, 3, 4, 5
    - 1, 3, 5
- Will always receive the head of a node
- 1 or 0 nodes
    - If null, return null
    - If one node, return head

DATA STRUCTURE
- A LL
    - No need for a dummy
    - prev
    - curr
    - reassign to .next.next

[1, 2, 3, 4, 5] null
             c
1 -> 3 -> 5

[1, 2, 3, 4] null
             c
1 -> 3 -> null

- curr is reassign to curr.next.next
- curr is incremented
- Break if curr or curr.next is null

ALGORITHM
1. Validate input
    - If head is null, return head
2. Setup
    - Initialize curr to head
3. Loop through LL, removing every even node
    - Loop through LL (while curr is not null and curr.next is not null)
        - Reassign curr.next to curr.next.next
        - Increment curr
4. Return head
*/

function removeEverySecondNode(head) {
  let curr = head;

  while (curr && curr.next) {
    curr.next = curr.next.next;
    curr = curr.next;
  }

  return head;
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

// TEST CASES

// Happy Path
let list1 = createLinkedList([1, 2, 3, 4, 5]);
let list2 = createLinkedList([5, 3, 4, 2, 1]);

// Different length
let list3 = createLinkedList([1, 2, 3, 4]);
let list4 = createLinkedList([1, 2]);

// 1 or 0
let list5 = createLinkedList([1]);
let list6 = createLinkedList([]);

printLinkedList(removeEverySecondNode(list1)); // Expected: 1 -> 3 -> 5 -> null
printLinkedList(removeEverySecondNode(list2)); // Expected: 5 -> 4 -> 1 -> null
printLinkedList(removeEverySecondNode(list3)); // Expected: 1 -> 3 -> null
printLinkedList(removeEverySecondNode(list4)); // Expected: 1 -> null
printLinkedList(removeEverySecondNode(list5)); // Expected: 1 -> null
printLinkedList(removeEverySecondNode(list6)); // Expected: null
