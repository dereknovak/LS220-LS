/* 

1:05

PROBLEM
I: An array of nums, not sorted
I: A number, representing a target value
O: A number, representing the max sum from 2 elements in input array that is less than the target value

RULES
- max sum
    - adding 2 distinct numbers to gether, the highest value
    - should be less than the target value (2nd input)
- distinct
    - 2 numbers should be of a different index
    - Could be the same number
- If no sum is less than the target, return -1
- Can have negative numbers

EXAMPLES
[6, 8, 10, 12] // target = 5
6 + 8 => 14
6 + 10 => 16
6 + 12 => 18

DATA STRUCTURE
- Array
- 2 pointer
    - 

[8, 2, 4, 9, 5, 10, 1, 7] // target = 16
 a                     r
[8, 2, 4, 9, 5, 10, 1, 7]
 s                     e

maxSum = 15

[1, 2, 3, 4, 5] // target = 100
    a  r

maxSum = 9
[8, 2, 4, 9, 5, 10, 1, 7] // target 16
[1, 2, 4, 5, 7, 8, 9, 10]
             s         e

maxSum = 15

[7, 4, 15, 11, 21, 9], 24
[4, 7, 9, 11, 15, 21]
 a         r             

maxSum = 13

ALGORITHM
1. Sort the nums ascending
2. Setup
     - Initialize start to 0
     - Initialize end to nums length - 1
     - Initialize maxSum to -Infinity
3. Use start/end 2 pointers to find the maxSum < target
    - Loop through nums (while start < end)
        - Initialize currSum to start + end
        - If currSum < target
            - Reassign maxSum to the max of maxSum and currSum
            - Decrement end
        - Otherwise
            - Increment start

4. Return the maxSum
*/

function twoSumLessThanTarget(nums, target) {
  nums = nums.sort((a, b) => a -b);

  let start = 0;
  let end = nums.length - 1;
  let maxSum = -Infinity;

  while (start < end) {
    const currSum = nums[start] + nums[end];

    if (currSum < target) {
      maxSum = Math.max(maxSum, currSum);
      start++;
    } else {
      end--;
    }
  }

  return maxSum === -Infinity ? -1 : maxSum;
}



// TEST CASES

// Happy Path
console.log(twoSumLessThanTarget([3, 1, 4], 5) === 4);
console.log(twoSumLessThanTarget([8, 2, 4, 9, 5, 10, 1, 7], 16) === 15);
console.log(twoSumLessThanTarget([5, 8, 3, 2, 1], 6) === 5);
console.log(twoSumLessThanTarget([6, 8, 10, 12], 5) === -1);
console.log(twoSumLessThanTarget([1, 2, 3, 4, 5], 100) === 9);
console.log(twoSumLessThanTarget([10, 20, 30, 40, 50], 40) === 30);
console.log(twoSumLessThanTarget([7, 4, 15, 11, 21, 9], 24) === 22);

// // Equal
console.log(twoSumLessThanTarget([3, 1, 4], 7) === 5);

// Negatives
console.log(twoSumLessThanTarget([-2, 5, -3, 1], -4) === -5);

// Zeros
console.log(twoSumLessThanTarget([1, 0, 5], 2) === 1);
console.log(twoSumLessThanTarget([1, 0, 5], 0) === -1);

// Duplicates
console.log(twoSumLessThanTarget([1, 1, 1, 1, 1], 4) === 2);

// All test cases should log true