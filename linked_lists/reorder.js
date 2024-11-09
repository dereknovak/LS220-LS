/* 

10:44 // 11:17
- Solved without hint
- Mostly hung up on the while statement
- Solution is identical to provided solution

PROBLEM
I: The head of a LL
O: The head of a LL, with odds and evens grouped together

RULES
- Odds come before evens
- Order of nodes should remain the same
- If empty or just one node, return the head **GUARD**
- Nodes are 1-indexed

EXAMPLE
[1, 2, 3, 4, 5]

1 -> 3 -> 5 -> 2 -> 4 -> null

DATA STRUCTURE
- A singly LL
    - Do not need dummy
    - Have oddHead
    - Have evenHead
    - Connect end of odd to evenHead after iteration

[1, 2, 3, 4, 5] null
             o  e
 odd: 1 -> 3 -> 5
even: 2 -> 4 -> null

[1, 2, 3, 4] null
       o  e
 odd: 1 -> 3 -> null
even: 2 -> 4 ->

- Each iteration, connect node to node.next.next
- Break if odd.next.next points to null OR even.next.next points to null
    - We can short circuit null.next from happening

APPLICATION
[1, 2, 3, 4, 5] null
              o  e
 odd: 1 -> 3 -> 5
even: 2 -> 4 -> null

[1, 2, 3, 4] null
       o  e
 odd: 1 -> 3
even: 2 -> 4

ALGORITHM
1. Validate data
    - If head or head.next is null, return head
2. Setup
    - Initialize odd to head
    - Initialize even to head.next
3. Loop through odds/evens of LL until null is found
    - Loop through LL (while odd.next AND (odd.next AND even.next))
        - Reassign odd.next to odd.next.next
        - Reassign even.next to even.next.next
        - Reassign odd to odd.next
        - Reassign even to even.next
4. Attach even of odds to beginning of evens
    - Reassign odd.next to head.next
5. Return head
*/

function reorderOddEven(head) {
  if (!head || !head.next) return head;

  let odd = head;
  let even = head.next;
  let evenHead = even;

  while (odd.next && even.next) {
    odd.next = odd.next.next;
    even.next = even.next.next;

    odd = odd.next;
    even = even.next;
  }

  odd.next = evenHead;

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

// Test cases
let list1 = createLinkedList([1, 2, 3, 4, 5]);
let list2 = createLinkedList([2, 1, 3, 5, 6, 4, 7]);
let list3 = createLinkedList([1, 2, 3, 4]);
let list4 = createLinkedList([1]);
let list5 = createLinkedList([1, 2]);
let list6 = createLinkedList([]);

// console.log("Original lists:");
// printLinkedList(list1);
// printLinkedList(list2);
// printLinkedList(list3);
// printLinkedList(list4);
// printLinkedList(list5);
// printLinkedList(list6);

console.log("\nAfter reordering odd and even positions:");
printLinkedList(reorderOddEven(list1)); // Expected: 1 -> 3 -> 5 -> 2 -> 4 -> null
printLinkedList(reorderOddEven(list2)); // Expected: 2 -> 3 -> 6 -> 7 -> 1 -> 5 -> 4 -> null
printLinkedList(reorderOddEven(list3)); // Expected: 1 -> 3 -> 2 -> 4 -> null
printLinkedList(reorderOddEven(list4)); // Expected: 1 -> null
printLinkedList(reorderOddEven(list5)); // Expected: 1 -> 2 -> null
printLinkedList(reorderOddEven(list6)); // Expected: null