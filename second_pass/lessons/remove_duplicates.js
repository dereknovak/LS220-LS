/* 

9:25 // 10:02
- Spent a LOT of time debugging at the end
    - Had a good structure to how I debugged, but it still took about 8-10 mins
        - I took the problems with bugs and walked through them using the code
    - I assumed the ListNode class had a default constructor for val = 0 and next = null
    - My inner-most while loop originally had `while (!curr...)` which was dumb
- Figured out the approach fairly quickly
    - Great use of visualizing Linked List
        - [1, 2, 3, 4]
        -  p  c
- Last prev.next = curr was unneccessary
- Did a great job of creating a test case to break my algorithm
- Just looked at my first attempt's solution... yikes!

PROBLEM
I: The head of a singly LL, sorted
O: The head of a singly LL, with all node with duplicate values removed

RULES
- LL is sorted
- Remove all nodes that have a duplicate
    - 1, 1, 2
        - Only return 2
- Returned LL must use original nodes
- If null, return null

EXAMPLE
Input: head = [1,2,3,3,4,4,5]
duplicates = 3, 4
Output: [1,2,5]

DATA STRUCTURE
- Linked List
- Dummy Node
    - In case the first node is repeated
- Use 2 pointers
    - prev
    - curr

- curr checks if next value is the same
    - If different
        - Increment prev
        - Increment curr
    - If it is
        - iterate until a different value is found
        - Link prev to curr
    - Increment prev
- Otherwise, iterate to next node
- Stop when node is null

APPLICATION
d [1, 2, 3, 3, 4, 4, 5] null
      p        c

d [1, 2, 2] null
   p        c

d [1, 1, 2, 3, 3] null
p        c
d -> 2 -> 3 -> 3 -> null

d [1, 2, 3, 4, 5] null
                p  c

ALGORITHM
1. Setup
    - Initialize dummy to new ListNode
    - Initialize prev to dummy
    - Initialize curr to head
2. Remove duplicates from LL
    - Loop through LL (while curr is not null)
        - If curr is equal to curr.next
            - Initialize value to curr.val
            - Loop while curr.val == val
                - Increment curr
            - Link prev to curr
        - Otherwise
            - Assign prev to prev.next
            - Assign curr to curr.next
3. Link prev to curr
4. Return the head of LL

*/

function removeDuplicates(head) {
  const dummy = new ListNode();
  dummy.next = head;

  let prev = dummy;
  let curr = head;

  while (curr && curr.next) {
    if (curr.val === curr.next.val) {
      const value = curr.val;

      while (curr && curr.val === value) {
        curr = curr.next;
      }

      prev.next = curr;
    } else {
      curr = curr.next;
      prev = prev.next;
    }
  }

  // prev.next = curr;
  return dummy.next;
}

function ListNode(val) {
  this.val = val;
  this.next = null;
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

function printLinkedList(head) {
  let currentNode = head;
  let listStr = '';
  while (currentNode !== null) {
      listStr += currentNode.val + ' -> ';
      currentNode = currentNode.next;
  }
  listStr += 'null'; // Indicate the end of the list
  console.log(listStr);
}

let list1 = createLinkedList([1, 1, 2]);
printLinkedList(removeDuplicates(list1)); // Expected: "2 -> null"

let list2 = createLinkedList([1, 1, 2, 3, 3]);
printLinkedList(removeDuplicates(list2)); // Expected: "2 -> null"

// None left
let list3 = createLinkedList([1, 1, 2, 2, 3, 3]);
printLinkedList(removeDuplicates(list3)); // Expected: "null"

// None removed
let list4 = createLinkedList([1, 2, 3, 4, 5]);
printLinkedList(removeDuplicates(list4)); // Expected: "1 -> 2 -> 3 -> 4 -> 5 -> null"

// Null
let list5 = createLinkedList([]);
printLinkedList(removeDuplicates(list5)); // Expected: "null"

// Test Example
let list6 = createLinkedList([1, 2, 2]);
printLinkedList(removeDuplicates(list6)); // Expected: "1 -> null"

// Additional Test Cases

let list7 = createLinkedList([1, 2, 2, 3, 3, 4, 5, 5]);
printLinkedList(removeDuplicates(list7)); // Expected: 1 -> 4 -> null

let list8 = createLinkedList([1, 1, 1, 2, 3]);
printLinkedList(removeDuplicates(list8)); // Expected: 2 -> 3 -> null

let list9 = createLinkedList([1, 2, 3, 4, 5]);
printLinkedList(removeDuplicates(list9)); // Expected: 1 -> 2 -> 3 -> 4 -> 5 -> null

let list10 = createLinkedList([1, 1, 1, 1, 1]);
printLinkedList(removeDuplicates(list10)); // Expected: null

let list11 = createLinkedList([1, 2, 2, 3, 3, 3, 4, 4, 5, 5, 5]);
printLinkedList(removeDuplicates(list11)); // Expected: 1 -> null

let list12 = createLinkedList([1, 1, 2, 2, 3, 3, 4, 5, 5]);
printLinkedList(removeDuplicates(list12)); // Expected: 4 -> null

