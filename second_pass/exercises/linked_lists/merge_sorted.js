/* 

8:13 // 8:35
- No debugging required
- A lot of time spent on creating test cases
- Very smooth

PROBLEM
I: A singly LL, sorted
I: A singly LL, sorted
O: A singly LL, composed of both input LL, sorted

RULES
- List lengths can be different
- New LL must be sorted and contain all nodes from inputs

EXAMPLE
[1, 3, 5]
[2, 4, 6]
1 -> 2 -> 3 -> 4 -> 5 -> 6 -> null

[1, 2, 3]
[4, 5, 6]
1, 2, 3, 4, 5, 6, -> null

[1, 2, 4]
[3, 5, 6]
1, 2, 3, 4, 5, 6 -> null

DATA STRUCTURE
- Use both LL
- Need a dummy
    - Point to the head
- Use a pointer for each LL
    - Whichever node is small, link prev to it, then increment
- Whenever looping stops, whichever node is not null, link prev to it for the rest

[1, 3, 5]
          a
[2, 4, 6]
       b
d -> 1 -> 2 -> 4 -> 5 -> 6 -> null

[3]
   a
[1, 2, 4, 5]
       b
d -> 1 -> 2 -> 3 -> 4 -> 5 -> null

APPLICATION
[1, 1, 4]
          a
[2, 5, 5]
    b
d -> 1 -> 1 -> 2 -> 4 -> 5 -> 5 -> null
                    p
ALGORITHM
Inputs: nodeA, nodeB
1. Setup
    - Initialize a dummy node
    - Initialize prev to dummy node
2. Create new LL
    - Loop through LLs until nodeA or nodeB is null
        - If nodeA < nodeB
            - Connect prev to nodeA
            - Assign prev to nodeA
            - Increment nodeA
        - Otherwise
            - Connect prev to nodeB
            - Assign prev to nodeB
            - Increment nodeB
    - If nodeA is null
        - Connect prev to nodeB
    - Otherwise
        - Connect prev to nodeA
3. Return the head of the new LL
    - Return the next node of dummy

*/

function mergeSortedLists(nodeA, nodeB) {
  const dummy = new ListNode();
  let prev = dummy;

  while (nodeA && nodeB) {
    if (nodeA.val < nodeB.val) {
      prev.next = nodeA;
      prev = nodeA;
      nodeA = nodeA.next;
    } else {
      prev.next = nodeB;
      prev = nodeB;
      nodeB = nodeB.next;
    }
  }

  prev.next = nodeA ?? nodeB;
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
  let current = head;
  let listStr = '';
  while (current !== null) {
    listStr += current.val + ' -> ';
    current = current.next;
  }
  listStr += 'null';
  console.log(listStr);
}

// TEST CASES

// Happy Path

let list1 = createLinkedList([1, 3, 5]);
let list2 = createLinkedList([2, 4, 6]);
printLinkedList(mergeSortedLists(list1, list2)); // Expected: 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> null

let list3 = createLinkedList([1, 2, 3]);
let list4 = createLinkedList([4, 5, 6]);
printLinkedList(mergeSortedLists(list3, list4)); // Expected: 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> null

let list5 = createLinkedList([1, 2, 4]);
let list6 = createLinkedList([3, 5, 6]);
printLinkedList(mergeSortedLists(list5, list6)); // Expected: 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> null

// Repeated

let list7 = createLinkedList([1, 1, 4]);
let list8 = createLinkedList([2, 5, 5]);
printLinkedList(mergeSortedLists(list7, list8)); // Expected: 1 -> 1 -> 2 -> 4 -> 5 -> 5 -> null

// Different Lengths

let list9 = createLinkedList([3]);
let list10 = createLinkedList([1, 2, 4, 5]);
printLinkedList(mergeSortedLists(list9, list10)); // Expected: 1 -> 2 -> 3 -> 4 -> 5 -> null

// Empty

let list11 = createLinkedList([]);
let list12 = createLinkedList([1, 2, 3]);
printLinkedList(mergeSortedLists(list11, list12)); // Expected: 1 -> 2 -> 3 -> null

// Additional Test Cases

let list13 = createLinkedList([]);
let list14 = createLinkedList([1]);
printLinkedList(mergeSortedLists(list13, list14)); // Expected: 1 -> null

let list15 = createLinkedList([1, 5, 9]);
let list16 = createLinkedList([2, 4, 6, 8, 10]);
printLinkedList(mergeSortedLists(list15, list16)); // Expected: 1 -> 2 -> 4 -> 5 -> 6 -> 8 -> 9 -> 10 -> null

let list17 = createLinkedList([1, 2, 5]);
let list18 = createLinkedList([3, 6, 7]);
printLinkedList(mergeSortedLists(list17, list18)); // Expected: 1 -> 2 -> 3 -> 5 -> 6 -> 7 -> null