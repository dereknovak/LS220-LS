/* 

9:52 // 10:23
- A LOT of debugging at the end, despite solving this problem twice before
    - Got stuck on the second `if` condition
        - Originally had `nums[mid + 1] > nums[mid] && nums[right] > nums[left]`
            - This worked unless the max number was on the right of mid despite right < left
    - Should've just initially used a guard clause for an empty array
        - Originally initialize `max = null`, but null got treated as 0, which created problems for negative test cases
    - My revised `if` condition still had a bug for duplicates, so had to include `>=` instead
- My first attempt only fails the empty test case, which would be an easy fix
- I like my solution better than the provided one and my first attempt

PROBLEM
I: An array of numbers, sorted (sort of)
O: A number, representing the maximum number in array

RULES
- rotated
    - Numbers are sorted, but has been shifted by an unknown amount
        - 1, 2, 3, 4
        - 2, 3, 4, 1
        - 3, 4, 1, 2
        - ...
- If empty, return null
- Could have negative numbers
- Could have repeated numbers

EXAMPLE
[8, 9, 10, 2, 5, 6]
max = 10

DATA STRUCTURE
- Binary Search
    - Keep track of max
        - max variable
    - If number to right of mid is greater than mid && mid > left
        - Eliminate the left numbers
    - Otherwise
        - Eliminate the right numbers

[8, 9, 10, 2, 5, 6]
 l      m        r

[15, 18, 2, 3, 6, 12]
 lm   r
max = 18

[2, 4, 5, 5, 6, 1]
 l     m        r
max = null

ALGORITHM
1. Setup
    - Initialize left to 0
    - Initialize right to nums length - 1
    - Initialize max to null
2. Use a binary search to find the max number
    - Loop through nums (while left <= right)
        - Initialize mid to left + right / 2
        - Reassign max to mid

        - If mid + 1 >= mid AND mid >= left
            - Eliminate left numbers
        - Otherwise
            - Eliminate right numbers
3. Return the max number
*/

function findMax(nums) {
  if (!nums.length) return null;

  let left = 0;
  let right = nums.length - 1;
  let max = -Infinity;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    max = Math.max(nums[mid], max);

    if (nums[mid + 1] >= nums[mid] && nums[mid] >= nums[left]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return max;
}

// TEST CASES

console.log(findMax([8, 9, 10, 2, 5, 6]) === 10);
console.log(findMax([15, 18, 2, 3, 6, 12]) === 18);
console.log(findMax([7, 8, 2, 3, 4, 5, 6]) === 8);
console.log(findMax([3, 1]) === 3);

// Sorted
console.log(findMax([1, 2, 3, 4, 5]) === 5);

// One Element
console.log(findMax([8]) === 8);

// Empty
console.log(findMax([]) === null);

// Negative
console.log(findMax([1, 2, -5, -4]) === 2);
console.log(findMax([-7, -6, -9, -8]) === -6);

// Repeated
console.log(findMax([4, 4, 5, 1, 2, 2, 3]) === 5);
console.log(findMax([4, 5, 5, 1, 2, 3]) === 5);

// Additional Test Cases
console.log(findMax([5]) === 5);
console.log(findMax([9, 10, 11, 12, 13, 14, 15, 1, 2, 3]) === 15);
console.log(findMax([4, 5, 1, 2, 3]) === 5);
console.log(findMax([23, 34, 38, 40, 41, 14, 15, 16, 17, 18, 19, 20, 21]) === 41);
console.log(findMax([100, 200, 300, 400, 500]) === 500);
console.log(findMax([45, 47, 49, 51, 53, 55, 57, 59, 61, 63, 44]) === 63);
console.log(findMax([11, 13, 15, 17, 19, 21, 1, 3, 5, 7, 9]) === 21);