/* 

7:14 // 7:24
- Easy

PROBLEM
I: The head of a singly list
O: The head of the singly list, with all duplicates removed

RULES
- The order should remain the same
- The value should not be removed entirely, just any duplicates

DATA STRUCTURE
- Linked List
    - prev
        - Link distinct element to next value
    - curr
        - Increment until a new value is found
            - Until prev and curr are different
            - Then increment both prev and curr

[1, 1, 2, 3, 3]
          p    c
1 -> 2 -> 3 -> null

[2, 2, 2, 3, 3]
          p    c
 2 -> 3 -> null

ALGORITHM
1. Setup
    - Initialize prev to head
    - Initialize curr to head.next
2. Remove duplicates from the linked list
    - Loop until curr is null
        - If value of curr is not the same as value of prev
            - Link prev to curr
            - Increment prev
        - Increment curr
3. Link prev to curr one more time
4. Return the head of the LL with duplicates removed

*/

function deleteDuplicates(head) {
  let prev = head;
  let curr = head.next;

  while (curr) {
    if (curr.val !== prev.val) {
      prev.next = curr;
      prev = curr;
    }

    curr = curr.next;
  }

  prev.next = curr;
  return head;
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
let list2 = createLinkedList([1, 1, 2, 3, 3]);
let list3 = createLinkedList([1, 2, 3, 3, 4]);
let list4 = createLinkedList([2, 2, 2, 3, 3]);
let list5 = createLinkedList([5]);

printLinkedList(deleteDuplicates(list1)); // Expected: "1 -> 2 -> null"
printLinkedList(deleteDuplicates(list2)); // Expected: "1 -> 2 -> 3 -> null"
printLinkedList(deleteDuplicates(list3)); // Expected: "1 -> 2 -> 3 -> 4 -> null"
printLinkedList(deleteDuplicates(list4)); // Expected: "2 -> 3 -> null"
printLinkedList(deleteDuplicates(list5)); // Expected: "5 -> null"