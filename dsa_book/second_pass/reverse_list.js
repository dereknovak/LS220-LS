/* 

11:34 // 11:51
- Did not utilize application section of PEDAC
- Memory is still fresh after reverseSegment problem
- Solution is identical to provided one

PROBLEM
I: The head of a LL
O: The head of a LL, with list reversed

RULES
- Reverse the order of the LL
- There can be duplicates
- Will not necessarily be sorted
- If null, return null
- If one node, return the same LL

EXAMPLE
1 -> 2 -> 3 -> 4 -> null
4 -> 3 -> 2 -> 1 -> null

DATA STRUCTURE
- Linked List
    - prev
        - Start with it pointing to null
    - curr
        - At end, return curr as new head

null [1, 2, 3, 4] null
               p   c

null <- 1 <- 2 <- 3 <- 4 null
nextNode = null

- While curr
- Initialize next to curr.next
- curr.next point to prev
- prev is reassigned to curr
- curr is reassigned to next
- At end, return prev as head

ALGORITHM
1. Validate input
    - If head is null, return null
2. Setup
    - Initialize prev to null
    - Initialize curr to head
3. Reverse the LL
    - Loop through LL (while curr is not null)
        - Initialize next to curr.next
        - Point curr.next to prev
        - Reassign prev to curr
        - Reassign curr to next
4. Return prev as new head

*/

function reverseLinkedList(head) {
  if (!head) return null;

  let prev = null;
  let curr = head;

  while (curr) {
    const next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  return prev;
}

class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

// Helper function to print the linked list
function printList(head) {
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
head1.next.next.next = new ListNode(4);
console.log("Input: ", printList(head1));
console.log("Output:", printList(reverseLinkedList(head1)));
// Input:  1 -> 2 -> 3 -> 4 -> null
// Output: 4 -> 3 -> 2 -> 1 -> null

const head2 = new ListNode(3);
head2.next = new ListNode(2);
head2.next.next = new ListNode(5);
head2.next.next.next = new ListNode(4);
console.log("Input: ", printList(head2));
console.log("Output:", printList(reverseLinkedList(head2)));
// Input:  3 -> 2 -> 5 -> 4 -> null
// Output: 4 -> 5 -> 2 -> 3 -> null

// One node
const head3 = new ListNode(3);
console.log("Input: ", printList(head3));
console.log("Output:", printList(reverseLinkedList(head3)));
// Input:  3 -> null
// Output: 3 -> null

// No nodes
const head4 = null;
console.log("Input: ", printList(head4));
console.log("Output:", printList(reverseLinkedList(head4)));
// Input:  3 -> null
// Output: 3 -> null