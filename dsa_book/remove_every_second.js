/* 

PROBLEM
I: Head of a linked list
O: Mutate the linked list so that that every second is deleted

  H
  N1 N3 N5
      p  c    

- If curr.next is not null
Reassign current.next to next.next
Move onto next 
    - Reassign prev to curr
    - Reassign curr to curr.next
Continue until next is null

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

let list1 = createLinkedList([1, 2, 3, 4, 5]);
let list2 = createLinkedList([1, 2]);
let list3 = createLinkedList([1]);
let list4 = createLinkedList([1, 2, 3, 4]);
let list5 = createLinkedList([]);

printLinkedList(removeEverySecondNode(list1)); // Expected: 1 -> 3 -> 5 -> null
printLinkedList(removeEverySecondNode(list2)); // Expected: 1 -> null
printLinkedList(removeEverySecondNode(list3)); // Expected: 1 -> null
printLinkedList(removeEverySecondNode(list4)); // Expected: 1 -> 3 -> null
printLinkedList(removeEverySecondNode(list5)); // Expected: null