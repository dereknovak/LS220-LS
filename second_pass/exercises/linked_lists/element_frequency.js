/* 

7:36 // 7:57
- Not very organized
- Rushed through it just for studying sake
- Map objects are still difficult to use

PROBLEM
I: The head of a singly LL
O: The head of a new singly LL, representing the occurrences of each node value

EXAMPLE
input = [1, 1, 2, 1, 3] // output = [3, 1, 1]
1 => 3
2 => 1
3 => 1

DATA STRUCTURE
- A Map object for the counts
    - Key is the node value
    - Value is the node count

[1, 1, 2, 1, 3]
{1: 3, 2: 1, 3: 1}

ALGORITHM
1. Loop through LL, counting values
    - Use tallyNodes HELPER (tally)
2. Using tally, create new LL
   - Use createTallyList HELPER
3. Return the head of the new LL

HELPERS
tallyNodes(curr)
1. Setup
    - Initialize empty Map object (tally)
2. Loop through LL, counting values
    - Loop through LL (while curr is not null)
        - If tally has the current node value
            - Increment the tally's value
        - Increment node
3. Return the new LL

createTallyList(tally)
1. Setup
    - Initialize dummy list node
    - Initialize prev to dummy
2. Create the list
    - Use a for...in loop
        - Initialize a new list node with a value of the current value
        - Link prev to new list node
        - Increment prev
3. Return the head

*/

function createTallyList(tally) {
  const dummy = new ListNode();
  let prev = dummy;

  for (let pair of tally) {
    const node = new ListNode(pair[1]);
    prev.next = node;
    prev = node;
  }
  
  return dummy.next;
}

function tallyNodes(curr) {
  const tally = new Map();

  while (curr) {
    if (tally.has(curr.val)) {
      tally.set(curr.val, tally.get(curr.val) + 1);
    } else {
      tally.set(curr.val, 1)
    }

    curr = curr.next;
  }

  return tally;
}

function createFrequencyList(head) {
  const tally = tallyNodes(head);
  return createTallyList(tally);

  
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

function linkedListToArray(head) {
  let result = [];
  while (head) {
    result.push(head.val);
    head = head.next;
  }
  return result;
}

function testFrequencyList(input, expected) {
  let result = linkedListToArray(createFrequencyList(createLinkedList(input)));
  if (result.length !== expected.length) return false;
  let freq1 = new Map(), freq2 = new Map();
  for (let num of result) freq1.set(num, (freq1.get(num) || 0) + 1);
  for (let num of expected) freq2.set(num, (freq2.get(num) || 0) + 1);
  if (freq1.size !== freq2.size) return false;
  for (let [key, value] of freq1) {
    if (freq2.get(key) !== value) return false;
  }
  return true;
}

// Test cases
console.log(testFrequencyList([1, 1, 2, 1, 3], [3, 1, 1]));
console.log(testFrequencyList([1, 1, 2, 2, 2], [2, 3]));
console.log(testFrequencyList([6, 5, 4, 3, 2, 1], [1, 1, 1, 1, 1, 1]));
console.log(testFrequencyList([4, 4, 4, 4], [4]));
console.log(testFrequencyList([1, 2, 3, 4, 5], [1, 1, 1, 1, 1]));
console.log(testFrequencyList([], []));
console.log(testFrequencyList([1, 1, 1], [3]));
console.log(testFrequencyList([1, 2, 1, 2, 1, 2], [3, 3]));
// All test cases should log true.