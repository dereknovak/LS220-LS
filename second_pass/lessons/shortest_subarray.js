/* 

11:28 // 12:06
- Did not use hint
- Had to debug at the end
    - Conditional statement was wrong
        - original: runner >= length
        - fixed: runner >= length - 1
- Didn't really test at all
    - Should've tested groupExists function in isolation

PROBLEM
I: An array of numbers, unsorted
I: A number, representing a target value
O: A number, representing the minimal length of a subarray that sums to >= target value

RULES
- Must use complexity of O(NlogN)
    - Binary search + linear search
- If no array sums to the target, return 0
- 

EXAMPLE
[4, 2, 5, 7] // target = 10
4
42
425 ***
4257 ***
2
25
257 ***
5
57 ***
7
=> 2 (shortest length)

DATA STRUCTURE
- Array
- Binary Search on lengths
    - [5, 2, 4, 8]
    - [1, 2, 3, 4] (above array has a length of 4)
- Linear Search using the length
    - [5, 2, 4, 8]
        - [5, 2, 4, 8]
        - [5, 2, 4], [2, 4, 8]
        - [5, 2], [2, 4], [4, 8]
        - [5], [2], [4], [8]

APPLICATION
[5, 2, 4, 8] // target 12
lengths = [1, 2, 3, 4]
           l  m     r

[5, 2, 4, 8]
       l    r
sum = 12

ALGORITHM
1. Setup
    - Initialize left to 1
    - Initialize right to nums length
    - Initialize min to 0
2. Perform binary search on lengths
    - Loop through lengths (while left <= right)
        - Initialize mid to left + right / 2 (floor)
        - If groupExists HELPER
            - Reassign min to mid
            - Eliminate right lengths
        - Otherwise
            - Eliminate left lengths
3. Return min

HELPERS
groupExists(nums, target, length)
1. Setup
    - Initialize left to 0
    - Initialize right to 0
    - Initialize sum to 0
2. Perform window search through nums
    - Loop through nums (while right < nums length)
        - Setup window 
            - Add value @ right to sum
            - Increment right
        - Move window (only start when right >= length
            - Return true if sum >= target
            - Subtract left from sum
            - Increment left
3. Return false if no matches are found
*/

function minLengthForTargetSum(nums, target) {
  function groupExists(length) {
    let anchor = 0;
    let sum = 0;

    for (let runner = 0; runner < nums.length; runner++) {
      sum += nums[runner];

      if (runner >= length - 1) {
        if (sum >= target) return true;
        sum -= nums[anchor];
        anchor++;
      }
    }

    return false;
  }

  let left = 1;
  let right = nums.length;
  let min = 0;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (groupExists(mid)) {
      min = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return min;
}

// TEST CASES

// Happy Path
console.log(minLengthForTargetSum([4, 2, 5, 7], 10) === 2);
console.log(minLengthForTargetSum([4, 2, 5, 7], 12) === 2);

// // Test Example
console.log(minLengthForTargetSum([5, 2, 4, 8], 12) === 2);

// Empty Array
console.log(minLengthForTargetSum([], 4) === 0);

// No matches
console.log(minLengthForTargetSum([1, 1, 1, 1], 15) === 0);

// Match of 1
console.log(minLengthForTargetSum([4, 2, 5, 7], 7) === 1);

// Additional Test Cases
console.log(minLengthForTargetSum([1, 2, 3], 5) === 2);
console.log(minLengthForTargetSum([1, 1, 1], 4) === 0);
console.log(minLengthForTargetSum([8, 2, 1, 4], 8) === 1);
console.log(minLengthForTargetSum([1, 2, 5, 4, 3], 9) === 2);
console.log(minLengthForTargetSum([1, 4, 1, 3, 6, 2], 9) === 2);
console.log(minLengthForTargetSum([1, 2, 3, 4], 10) === 4);
console.log(minLengthForTargetSum([1, 2, 6, 1, 1, 7], 9) === 3);
console.log(minLengthForTargetSum([4, 2, 2, 1, 5, 2], 14) === 5);