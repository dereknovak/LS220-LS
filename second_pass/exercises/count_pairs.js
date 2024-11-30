/* 

10:41 // 11:10
- Tried to think of a different approach with 2 pointer, but my original solution worked so well
- Great inclusion of test cases
- Very smooth, no complaints

PROBLEM
I: An array of nums, sorted
I: A number, representing a target value
O: A number, representing the amount of pairs whose sum exceeds the target value

RULES
- Number pairs sum must be greater than target value to increment count
    - Not equal
- Input array will be sorted ascending
    - 1, 2, 3...
- A pair should not be counted twice
    - (1, 2) but not (2, 1)
- Will always include 2 inputs, array and num
- If array is empty, return 0
- Array will only have nums
- Could have negatives
- Could have duplicate numbers
    - Count separately

EXAMPLE
[1, 2, 3, 4, 5, 5] // target = 6
1, 2
1, 3
1, 4
1, 5
1, 5
2, 3
2, 4
2, 5 ***
2, 5 ***
3, 4 ***
3, 5 ***
3, 5 ***
4, 5 ***
4, 5 ***
5, 5 ***
=> 4

DATA STRUCTURE
- An array
- Use a failure flag
    - If fails twice in a row, break from loop
- 2 pointer
    - Anchor/Runner
        - Start at end and move backwards
            - End when right is 0 or failure is === 2
        - If exceeds target
            - Move left down
            - Increment result
        - If <= target
            - Move right down
            - Move left to one before right
   
[1, 2, 3, 4, 5] // target = 6
    l  r
result = 4

APPLICATION
[1, 2, 3, 4] // target = 6
l   r
result   = 1
failures = 2

ALGORITHM
1. Setup
    - Initialize right to nums length - 1
    - Initialize left to right - 1
    - Initialize result to 0
    - Initialize failures to 0
2. Loop through nums, finding pairs that exceed the target
    - Loop through nums (while right && failures < 2)
        - If nums @ right + nums @ left > target
            - Decrement left
            - Increment result
            - Reassign failures to 0
        - Otherwise
            - Decrement right
            - Reassign left to right - 1
            - Increment failures
3. Return the result

*/

function countPairs(nums, target) {
  let right = nums.length - 1;
  let left = right - 1;
  let result = 0;
  let failures = 0;

  while (right && failures < 2) {
    if (nums[left] + nums[right] > target) {
      left--;
      result++;
      failures = 0;
    } else {
      right--;
      left = right - 1;
      failures++;
    }
  }

  return result;
}

// TEST CASES

// Happy Path
console.log(countPairs([1, 2, 3, 4, 5], 6) === 4);
console.log(countPairs([1, 2, 3, 4], 6) === 1);
console.log(countPairs([1, 2, 3, 4, 5], 7) === 2);

// Empty
console.log(countPairs([], 6) === 0);

// All matches
console.log(countPairs([1, 2, 3, 4, 5], 2) === 10);

// No Pairs
console.log(countPairs([1, 2, 3, 4, 5], 9) === 0);

// Negatives
console.log(countPairs([-2, -1, 3], 1) === 1);

// Duplicates
console.log(countPairs([1, 2, 3, 4, 5, 5], 6) === 8);

// Additional Test Cases
console.log(countPairs([1, 2, 3, 4, 5], 6) == 4);
// Pairs: (2, 5), (3, 4), (3, 5), (4, 5)

console.log(countPairs([1, 2, 3, 4, 5], 8) == 1);
// Pair: (4, 5)

console.log(countPairs([1, 3, 5, 7], 6) == 4);
// Pairs: (1, 7), (3, 5), (3, 7), (5, 7)

console.log(countPairs([1, 2, 3, 4], 5) == 2);
// Pairs: (2, 4), (3, 4)

console.log(countPairs([1, 2, 3, 4, 5], 10) == 0);
// No pairs