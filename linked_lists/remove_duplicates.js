/* 

8:32 // 9:26
- I used 3 pointers instead of 2. Also used a flag to compensate for the extra pointer
- Looked at hint, but I was already implementing the hint's description, so it did not help

PROBLEM
I: The head of a LL
O: The head of LL, with duplicate values removed

RULES
- The LL will be sorted
    - Any duplicates should be in sequence
        - ALL of the values are removed, not just the duplicated ones
        - 1, 2, 2, 3 => 1 -> 3 -> null
- If list becomes empty, return null

EXAMPLES
[1, 2, 2, 3, 3, 4, 5, 5]
Duplicates = 2, 3, 5
Return = 1 -> 4 -> null

DATA STRUCTURE
- A linked list
    - Use 3 pointers
        - 1: Current Value (curr)
        - 2: Subsequent values, to check if unique (next)
        - 3. The previous, non duplicate node (prev)
        - Keep track of flag (duplicateFound)

 
    h 
 d [1, 1, 2, 2, 3, 3, 4, 5, 5] null
                      p  c     n
duplicateFound = true

   h
d [1, 2, 3, 4, 5]
            p  c  n 

d -> 1 -> 2 -> 3 -> 4
- Loop
    - If next is the same as curr
        - Swap duplicateFound to true
        - increment next
    - If value is different
        - If duplicateFound is true
            - If next is null
                - Reassign prev.next to null
                - break
            - Move curr to next
            - Move next to next.next
            - Swap duplicateFound to false
        - Otherwise
            - Reassign prev.next to curr
            - Reassign prev to curr
            - Curr is assign to next
            - next is assigned to next.next
- Return the next node from dummy
*/

function removeDuplicates(head) {
  let dummy = new ListNode();
  dummy.next = head;

  let prev = dummy;
  let curr = head;
  let next = head.next;
  let duplicateFound = false;

  while (true) {
    if (!next) {
      prev.next = duplicateFound ? null : curr;
      break;
    }

    if (next.val === curr.val) {
      duplicateFound = true;
      next = next.next;
    } else {
      if (duplicateFound) {
        curr = next;
        next = next.next;
        duplicateFound = false;
      } else {
        prev.next = curr;
        prev = curr;
        curr = next;
        next = next.next;
      }
    }
  }

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

let list1 = createLinkedList([1, 2, 2, 3, 3, 4, 5, 5]);
let list2 = createLinkedList([1, 1, 1, 2, 3]);
let list3 = createLinkedList([1, 2, 3, 4, 5]);
let list4 = createLinkedList([1, 1, 1, 1, 1]);
let list5 = createLinkedList([1, 2, 2, 3, 3, 3, 4, 4, 5, 5, 5]);
let list6 = createLinkedList([1, 1, 2, 2, 3, 3, 4, 5, 5]);

printLinkedList(removeDuplicates(list1)); // Expected: 1 -> 4 -> null
printLinkedList(removeDuplicates(list2)); // Expected: 2 -> 3 -> null
printLinkedList(removeDuplicates(list3)); // Expected: 1 -> 2 -> 3 -> 4 -> 5 -> null
printLinkedList(removeDuplicates(list4)); // Expected: null
printLinkedList(removeDuplicates(list5)); // Expected: 1 -> null
printLinkedList(removeDuplicates(list6)); // Expected: 4 -> null