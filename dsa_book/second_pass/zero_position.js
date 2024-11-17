/* 

3:16 // 3:34
- Went very smooth, nothing to add

PROBLEM
I: An array of integers
O: A number, representing the index where zero is or would be placed

RULES
- If 0 is present, return its index
- If 0 is not present, return the index where it would be inserted
- Will always have an array as an arg
- If empty, return 0
- Could contain duplicates
- Will not have multiple 0s
- Array will be sorted
- If no zero, and all are smaller, this might create problems ***

EXAMPLE
[3, 5, 7, 9, 11]
No 0, so it would be placed at index 0

[-7, -5, -3, 0, 2]
Return index 3

DATA STRUCTURE
- An array
- Binary search
    - Searching for a value (index)
    - Sorted
- Binary Rules
    - If mid is greater than 0
        - Move right
    - If mid is less than 0
        - Move left
    - If mid is 0, return mid (index)

[-3, -5, -7, -9, -11]
                  lr  l
Return left (mid + 1?)

  [3, 5, 7, 9, 11]
r lm  r      
Return left

[-3, -5, 7, 9, 11]
      r l
Return left

ALGORITHM
1. Validate input
    - If array is empty, return 0
2. Setup
    - Initialize left to 0
    - Initialize right to numbers length - 1
3. Binary Search
    - Loop through numbers (while left <= right)
        - Initialize mid to left + right / 2 (floor)
        - If mid < 0
            - Reassign left to mid + 1
        - If mid > 0
            - Reassign right to mid - 1
        - Otherwise (equals 0)
            - Return mid
4. If 0 is not found, return left
*/

function findZeroPosition(numbers) {
  if (!numbers.length) return 0;

  let left = 0;
  let right = numbers.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (numbers[mid] < 0) {
      left = mid + 1;
    } else if (numbers[mid] > 0 ) {
      right = mid - 1;
    } else {
      return mid;
    }
  }

  return left;
}

// TEST CASES

// Happy Path
console.log(findZeroPosition([-7, -5, -3, 0, 2]) === 3);
console.log(findZeroPosition([-7, -5, -3, -2, 0]) === 4);

// No zero
console.log(findZeroPosition([3, 5, 7, 9, 11]) === 0);
console.log(findZeroPosition([-3, -5, -7, -9, -11]) === 5);
console.log(findZeroPosition([-3, -5, 7, 9, 11]) === 2);

// Empty
console.log(findZeroPosition([]) === 0);

// Duplicates
console.log(findZeroPosition([-3, -3, 7, 9, 11]) === 2);

// Additional Test Cases
console.log(findZeroPosition([-8, -7, -5, -2, -1]) === 5);