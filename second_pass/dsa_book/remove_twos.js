/* 

10:57 // 11:27
- Creating test cases took a while
- My solution is more complicated than the provided one
    - `prev` stays put while `curr.val` is equal to 2. When it no longer equals 2, `prev` is moved to `curr`. `curr` increments every iteration
    
PROBLEM
I: The head of a linked list
O: The head of a linked list, with all 2s removed

RULES
- If a node has the value of 2, link the previous node to the next node
- Will always receive the head of a linked list
- If LL is empty, return the head still (null)
- Could have duplicates
- Could have consecutive 2s
- If just 2s, return head with null

EXAMPLE
1 -> 2 -> 3 -> 2 -> 4 -> null
1 -> 3 -> 4 -> null

DATA STRUCTURE
- Linked List
    - Dummy
        - In case head is a 2
    - curr
        - Iterate until curr is not a 2
    - prev
        - Link prev to curr when not a 2

dum [1, 3, 4, 2] null
           p      c
- While curr is not null
    - While curr is 2, increment
    - If curr is not 2
        - Link prev.next to curr
        - Reassign prev to curr
        - Increment curr
- After iteration, link prev to curr

ALGORITHM
1. Setup
    - Create a new dummy node
    - Point dummy next to the head
    - Initialize curr to head
    - Initialize prev to dummy
2. Loop through LL, removing nodes with a value of 2
    - Loop through LL (while curr is not null)
        - While value of curr is 2
            - Increment curr
        - Reassign prev.next to curr
        - Reassign prev to curr
        - Reassign curr to curr.next
3. Link the final prev to curr
4. Return the next node after dummy
*/

function deleteTwos(head) {
  const dummy = new ListNode();
  dummy.next = head;

  let curr = head;
  let prev = dummy;

  while (curr) {
    while (curr && curr.val === 2) {
      curr = curr.next;
    }
    if (!curr) break;

    prev.next = curr;
    prev = curr;
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

function stringifyList(head) {
  let curr = head;
  let result = "";
  while (curr !== null) {
    result += curr.val + " -> ";
    curr = curr.next;
  }
  result += "null";
  return result;
}

// TEST CASES

// Happy Path
const head1 = new ListNode(1);
head1.next = new ListNode(2);
head1.next.next = new ListNode(3);
head1.next.next.next = new ListNode(2);
head1.next.next.next.next = new ListNode(4);
console.log("Input: ", stringifyList(head1));
console.log("Output:", stringifyList(deleteTwos(head1)));

// All 2s
const head4 = new ListNode(2);
head4.next = new ListNode(2);
head4.next.next = new ListNode(2);
head4.next.next.next = new ListNode(2);
head4.next.next.next.next = new ListNode(2);
console.log("Input: ", stringifyList(head4));
console.log("Output:", stringifyList(deleteTwos(head4)));

// Starts with 2
const head5 = new ListNode(2);
head5.next = new ListNode(1);
head5.next.next = new ListNode(3);
head5.next.next.next = new ListNode(4);
head5.next.next.next.next = new ListNode(2);
console.log("Input: ", stringifyList(head5));
console.log("Output:", stringifyList(deleteTwos(head5)));

// Consecutive 2s
const head2 = new ListNode(1);
head2.next = new ListNode(2);
head2.next.next = new ListNode(2);
head2.next.next.next = new ListNode(3);
head2.next.next.next.next = new ListNode(4);
console.log("Input: ", stringifyList(head2));
console.log("Output:", stringifyList(deleteTwos(head2)));

// Null
const head3 = null;
console.log("Input: ", stringifyList(head3));
console.log("Output:", stringifyList(deleteTwos(head3)));

