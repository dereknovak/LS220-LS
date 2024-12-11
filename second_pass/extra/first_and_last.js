// Find First and Last Position of Element in Sorted Array
// Medium
// Topics
// Companies
// Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

// If target is not found in the array, return [-1, -1].

// You must write an algorithm with O(log n) runtime complexity.

/* 

12:09 // 12:36

PROBLEM
I: An array of numbers, ascending
I: A number, representing a target value
O: An array of 2 numbers, representing the start/end positions of the given target

RULES
- If target does not exist in array
    - Return [-1, -1]
- Same if array is empty
- Numbers will be ascending
- May have repeated values
- Positions are represented by indicies
- Could have negatives

EXAMPLE
nums = [5,7,7,8,8,10], target = 8
[3, 4]

[5,7,7,8,8,10], target = 6
[-1, -1] (no 6)

DATA STRUCTURE
- An array
- Binary Search 2x
    - First is to find the first occurrence of value
    - Second is to find the last occurrence of value

APPLICATION
[5, 7, 7, 8, 8, 10] // target = 8
        r  lmr   
targetMin = 3
[5, 7, 7, 8, 8, 10] // target = 8

targetMax = undefined

- Have a variable to keep track of the targetMin and targetMax
    - Reassign that value if the current value of mid is equal to target
- First
    - If mid < target
        - Eliminate left values
    - Otherwise
        - Eliminate right values
- Second
    - If mid <= target
        - Eliminate left values
    - Otherwise
        - Eliminate right values

ALGORITHM
1. Perform binary search to find targetMin
2. If targetMin is undefined, return [-1, -1]
3. Perform binary search to find targetMax
4. Return an array of [targetMin, targetMax]
*/

function findFirstOccurrence(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let targetMin;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    
    if (nums[mid] < target) {
      left = mid + 1;
    } else {
      if (nums[mid] === target) targetMin = mid;
      right = mid - 1;
    }
  }

  return targetMin;
}

function findLastOccurrence(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let targetMax;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] <= target) {
      if (nums[mid] === target) targetMax = mid;
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return targetMax;
}

function firstAndLast(nums, target) {
  const targetMin = findFirstOccurrence(nums, target);
  if (targetMin === undefined) return [-1, -1];
  const targetMax = findLastOccurrence(nums, target);

  return [targetMin, targetMax];
}

 

// Example 1:

// Input: nums = [5,7,7,8,8,10], target = 8
// Output: [3,4]
// Example 2:

// Input: nums = [5,7,7,8,8,10], target = 6
// Output: [-1,-1]
// Example 3:

// Input: nums = [], target = 0
// Output: [-1,-1]

// TEST CASES

// Happy Path
console.log(firstAndLast([5,7,7,8,8,10], 8)); // [3, 4]

// All numbers in array
console.log(firstAndLast([8, 8, 8, 8, 8, 8], 8)); // [0, 5]

// Start/End
console.log(firstAndLast([1, 1, 2, 3], 1)); // [0, 1]
console.log(firstAndLast([1, 1, 2, 3, 3], 3)); // [3, 4]

// Only 1 occurrence
console.log(firstAndLast([5,7,7,8,8,10], 5)); // [0, 0]

// Not in array
console.log(firstAndLast([5,7,7,8,8,10], 6)); // [-1, -1]

// Empty
console.log(firstAndLast([], 6)); // [-1, -1]

// Negatives
console.log(firstAndLast([-3, -2, -2, -1, 0, 1], -2)); // [1, 2]

