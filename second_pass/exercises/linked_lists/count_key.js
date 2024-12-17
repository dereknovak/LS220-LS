/* 

6:54 // 6:58
- Extremely easy
- Messed around with recursive version afterwards

PROBLEM
I: The head of a singly LL
I: An integer, representing a value to be counted
O: A number, representing the amount of occurrences of the input integer in the LL

ALGORITHM
1. Setup (curr, target)
    - Initialize count to 0
2. Loop through the LL, counting the number of times the target value appears
    - Loop through LL (while curr is not null)
        - If curr value is equal to target
            - Increment count
        - Increment curr
3. Return the target value count

*/

function oldCountKeyOccurrences(curr, target) {
  let count = 0;

  while (curr) {
    if (curr.val === target) count++;
    curr = curr.next;
  }

  return count;
}

function countKeyOccurrences(curr, key, count = 0) {
  if (!curr) return count;
  if (curr.val === key) count++;
  return countKeyOccurrences(curr.next, key, count);
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

let list1 = createLinkedList([1, 2, 1, 2, 1, 3, 1]);
let list2 = createLinkedList([4, 4, 4, 4]);
let list3 = createLinkedList([1, 2, 3, 4, 5]);
let list4 = createLinkedList([5, 5, 1, 2, 3, 5, 5]);
let list5 = createLinkedList([]);
let list6 = createLinkedList([1, 2, 3, 1, 1]);

console.log(countKeyOccurrences(list1, 1) === 4);
console.log(countKeyOccurrences(list2, 4) === 4);
console.log(countKeyOccurrences(list3, 1) === 1);
console.log(countKeyOccurrences(list4, 5) === 4);
console.log(countKeyOccurrences(list5, 1) === 0);
console.log(countKeyOccurrences(list6, 1) === 3);