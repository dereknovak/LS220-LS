
/*
There is an integer array nums sorted in ascending order (with distinct values).

Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].

Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.

Example:
Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4

[0,1,2,4,5,6,7] => [4,5,6,7,0,1,2] k (pivot) = 3
*/

// FIRST ATTEMPT FOR PROBLEM (Could not complete)

/* 

8:12 // ...

PROBLEM
I: An array of nums, sorted ascending and with distinct values
I: A number, representing a target value
O: A number, representing the index of the target within the array

RULES
- Array is pivoted at K (unknown index)
    - An index within the array
    - Rotation maintains order, but brings the pivot to the front of the array
- Return the index of the target, or -1 if not present
- Will always have an array and a number
- If array is empty, return -1
- Can have negative numbers

EXAMPLE
Input: nums = [4,5,6,7,0,1,2], target = 0
Index => 4

DATA STRUCTURE
- An array
- Binary Search 1
    - (search for min number)
    - Log the current mid value
    - If right < left
        - Move left
    - Otherwise
        - Move right
    - Return the index of this (mid)
- Slice array from index of mid + slice from 0 => index
- Binary Search 2
    - If target is < mid
        - move right
    - Otherwise
        - Move left


[4, 5, 6, 7, 0, 1, 2] // target = 0
             lmr
min = 0

[0, 1, 2, 4, 5, 6, 7] // target 0
 l         m        r


[2, 4, 5, 6, 7, 0, 1], 0
             l  m   r


APPLICATION
[0, 1, 2, 4, 5, 6, 7] // target = 0
l         m        r
minIndex =


ALGORITHM
1. Perform first binary search unless first value is less than last value
    - use unrotate HELPER
2. Create new array using the return of first search
    - nums.slice(2).concat(nums.slice(0, 2));
    - Slice at value from unrotate
        - Concat from 0 to that value
3. Perform second binary search
    - use findTarget HELPER
4. Return the index of the search

HELPERS
findTarget(unrotateNums, target)
1. Setup
    - Initialize left to 0
    - Initialize right to unrotatedNums length - 1
2. Perform binary search
    - Loop through unrotatedNums
        - Initialize mid to left + right / 2 (floor)
        - If target < value @ mid
            - Reassign right to mid - 1
        - If target > value @ mid
            - Reassign left to mid + 1
        - Otherwise
            - Return mid
3. Return -1 if target is not present

unrotate(nums)
1. Setup
    - Initialize left to 0
    - Initialize right to nums length - 1
    - Initilize minIndex
2. Perform binary search
    - Loop through nums (while left <= right)
        - Initialize mid to left + right / 2 (floor)
        - Reassign minIndex to mid

        - If value @ right < value @ left
            - Reassign left to mid + 1
        - Otherwise
            - Reassign right to mid - 1
3. Return minIndex

*/
function unrotate(nums) {
  let left = 0;
  let right = nums.length - 1;
  let minIndex = Infinity;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    minIndex = Math.min(mid, minIndex);

    if (nums[right] < nums[left]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return minIndex;
}

console.log(search([7,0,1,2,3], 0) === 1);


function search(nums, target) {
  if (!nums.length) return -1;

  let smallestIndex = 0;

  if (nums[0] > nums[nums.length - 1]) {
    smallestIndex = unrotate(nums);
  }

  console.log(smallestIndex);
}

// TEST CASES

// // Happy Path
// console.log(search([4,5,6,7,0,1,2], 0) === 4);
// console.log(search([4,5,6,7,0,1,2], 5) === 1);
// console.log(search([4,5,6,7,0,1,2], 2) === 6);
// console.log(search([4,5,6,7,0,1,2], 4) === 0);

// // Not in Array
// console.log(search([4,5,6,7,0,1,2], 3) === -1);
// console.log(search([4,5,6,7,0,1,2], 8) === -1);

// // Different Sort
console.log(search([2,4,5,6,7,0,1], 0) === 5);
// console.log(search([2,4,5,6,7,0,1], 1) === 6);
// console.log(search([2,4,5,6,7,0,1], 2) === 0);
// console.log(search([2,4,5,6,7,0,1], 3) === -1);

// No pivot
// console.log(search([0,1,2,4,5,6,7], 0) === 0);

// // Negative
// console.log(search([0,1,2-4,-3,-2], -3) === 4);

// // Empty
// console.log(search([], 0) === -1);

// SECOND TIME GOING THROUGH PROBLEM TODAY (Completed, but a hot mess)

/* 

PROBLEM
I: An array of nums, sorted and distinct
I: A number, representing a target value
O: A number, representing the index of the target value or -1

RULES
- If not present, return -1
- If empty, return -1
- Can include negative numbers
- Numbers may be rotated

DATA STRUCTURE
- Array
- Binary Search 2x
- Binary Search 1
    - Find the smallest values
    - Use to create a newly sorted array
- Binary Search 2
    - Find the target value's index, or return -1

[4, 5, 6, 7, 0, 1, 2] // target = 0
             lmr

[0, 1, 2, 4, 5, 6, 7]
 l         m        r

[5, 1, 2, 3, 4]
lm  r     

[6, 7, 1, 2, 3, 4, 5]
 l  m  lr          

[5, 1, 2, 3, 4] // target = 3
pivot = 1
sortedIdx = 2
actualIdx = 3


- Check m + 1 and m - 1
    - Eliminate numbers on side that is less UNLESS right is larger than left
    - If m + 1 is smaller than m, eliminate left
    - If m - 1 is smaller than m, elimate right

    - If right is bigger than left, return index 0 ***
- while <=

let left = 0;
let right = array.length - 1;

while (left <= right) {
  let mid = Math.floor((left + right) / 2);

  if (array[mid] === target) {
    // Optional early return
  } else if (***comparison***) {
    left = mid + 1;
  } else {
    right = mid - 1;
  }
}

APPLICTAION
[0, 1, 2, -5, -4, -2, -1], 1
 l        m            r
ALGORITHM
1. Find the index of the smallest value in array
    - Use findSmallestValue HELPER
2. Create a new array, sorted, using the smallest index
3. Find the target value in the sorted array

HELPERS
findSmallestValue(nums)
- 
*/

function findPivot(nums) {
  let left = 0;
  let right = nums.length - 1;
  let mid;

  while (left <= right) {
    mid = Math.floor((left + right) / 2);

    if (nums[mid + 1] < nums[mid]) {
      left = mid + 1;
    } else if (nums[mid - 1] > nums[mid]) {
      return mid;
    } else {
      right = mid - 1;
    }
  }

  return mid;
}

function findTarget(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
}

function search(nums, target) {
  const pivot = findPivot(nums);
  const sortedNums = nums.slice(pivot).concat(nums.slice(0, pivot));
  const originalIndex = findTarget(sortedNums, target) + pivot || -1;

  return originalIndex >= nums.length ? originalIndex - nums.length : originalIndex;
}

// TEST CASES

// // findSmallestValue
// console.log(findSmallestValue([4, 5, 6, 7, 0, 1, 2]) === 4);
// console.log(findSmallestValue([5, 1, 2, 3, 4]) === 1);
// console.log(findSmallestValue([1, 2, 3, 5, 7, 9]) === 0);
// console.log(findSmallestValue([6, 7, 1, 2, 3, 4, 5]) === 2);


// Happy Path
console.log(search([4, 5, 6, 7, 0, 1, 2], 0) === 4);
console.log(search([4, 5, 6, 7, 0, 1, 2], 4) === 0);
console.log(search([4, 5, 6, 7, 0, 1, 2], 2) === 6);

// Testing
console.log(search([5, 1, 2, 3, 4], 3) === 3);

// Not Found
console.log(search([4, 5, 6, 7, 0, 1, 2], 3) === -1);

// Not rotated
console.log(search([1, 2, 3, 5, 7, 9], 3) === 2);

// Negatives
console.log(search([0, 1, 2, -5, -4, -2, -1], 1) === 1);

// Empty
console.log(search([], 5) === -1);

// Daniel's solution

function bsearchMax(arr, condition, left = 0, right = arr.length - 1) {
  while (left < right) {
    let mid = left + Math.ceil((right - left) / 2);

    if (condition(mid)) {
      left = mid;
    } else {
      right = mid - 1;
    }
  }

  return left;
}

function search(nums, target) {
  let maxIdx = bsearchMax(nums, i => nums[i] >= nums[0]);
  let candidate = bsearchMax(nums, i => nums[i] <= target, 0, maxIdx);

  console.log(maxIdx, candidate);
  if (nums[candidate] === target) return candidate;

  candidate = bsearchMax(nums, i => nums[i] <= target, maxIdx + 1);
  if (nums[candidate] === target) return candidate;
  return -1;
};