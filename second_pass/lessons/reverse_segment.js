/* 

4:27 // 4:58
- No debugging required
- No hints needed
- Had trouble testing along the way, but everything worked as intended

PROBLEM
I: The head of a singly LL
I: A number, representing a starting node
I: A number, representing an ending node
O: The head of the modified LL

RULES
- 1-indexed
- Start will always be <= End
- Guaranteed to be within bounds of LL

EXAMPLE
Input: head = [1, 3, 5, 7, 9], start = 2, end = 4
=> [1, 7, 5, 3, 9]

DATA STRUCTURE
- Linked List
    - 2 pointers
    - Utilize a helper function to reverse the segment
    - Get to segment, then reverse it
    - Need a dummy in case first node is part of the reverse
- In helper function, use end to determine when to stop
    - counter (end - start)
    - After reversing, link head to next
    - Return prev (new head)

[1, 3, 5, 7, 9] // start = 2 // end = 4
d [1, 3, 5, 7, 9] null
   p  c

reverse HELPER
[3, 5, 7, 9]
       p  c
7 -> 5 -> 3
next = 9

APPLICATION
[1, 2, 3, 4, 5, 6] // start = 3 // end = 5
d [1, 2, 3, 4, 5, 6] null
      p  c
[3, 4, 5, 6] null // maxCounter = 2
       p  c
1 -> 2 -> 5 -> 4 -> 3 -> 6

ALGORITHM
1. Setup
    - Create a dummy node, pointing to head
    - Initialize prev to dummy
    - Initialize curr to head
2. Loop through LL until start is found
    - Loop through LL (for loop, counter = 1, while counter < start
        - Increment prev
        - Increment curr
3. Reverse segment
    - reverseNodes HELPER (counter = end - start)
4. Link prev to new segment
5. Return head of modified LL (dummy.next)

HELPERS
reverseNodes(head, maxCounter)
1. Setup
    - Initialize prev to head
    - Initialize curr to head.next
2. Reverse Nodes (for loop, counter = 1, counter <= maxCounter)
    - Initialize next to curr.next
    - Point curr to prev
    - Reassign prev to curr
    - Reassign curr to next
3. Link head to curr
4. Return new head (prev)
*/

function reverseNodes(head, maxCounter) {
  let prev = head;
  let curr = head.next;

  for (let counter = 1; counter <= maxCounter; counter++) {
    const next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  head.next = curr;
  return prev;
}

function reverseSegment(head, start, end) {
  const dummy = new ListNode(0, head);
  let prev = dummy;
  let curr = head;

  for (let counter = 1; counter < start; counter++) {
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