/* 

11:12 // 11:34
- Additional Test Cases had 1 failure (last)
    - Did not have `Math.max` originally, which caused a failure if a second pair got closer to target.
    - Finished originally at 11:31, debugged for 3 minutes
- Solution is exactly the same as one provided, but I added an additional validation check for arrays that do not have enough elements
    - Removed validation check, as the solution holds fine without it.
PROBLEM
I: An array of integers
I: A number, representing a target number
O: A number, representing the maximum sum of 2 numbers that is < target

RULES
- The indicies should not be the same for the numbers
    - Cannot use the same element twice
- Sum must be less than target
- Return the maximum sum
- If no pairs exist, return -1
- If array has less than 2 arguments, return -1

EXAMPLE
[3, 1, 4] // target = 5
3 1 => 4 ***
3 4 => 7
1 4 => 5
return 4

DATA STRUCTURE
- Array
    - While left < right
    - Keep track of maxSum (initialize to -1)
    - Sort the array
        - Allows the use of 2 pointers
    - Left/Right
        - If sum is less than target
            - Reassign maxSum to sum
            - Move left up
        - Otherwise
            - Move right down

[3, 1, 4, 3] // target = 6
[1, 3, 3, 4]
    lr
maxSum = 5

APPLICATION
[3, 1, 4] // target = 1
[1, 3, 4]
 lr
maxSum = -1

[7, 4, 15, 11, 21, 9] // target = 24
[4, 7, 9, 11, 15, 21]
 l             r
maxSum = 19

ALGORITHM
1. Validate input
    - If length is less than 2, return -1
2. Setup
    - Initialize left to 0
    - Initialize right to length - 1
    - Initialize maxSum to -1
3. Find the maximum sum that is less than target using 2-pointers
    - Loop through array (while left < right)
        - Initialize sum to value at left + value at right
        - If sum is < target
            - Reassign maxSum to sum
            - Increment left
        - Otherwise
            - Decrement right
4. Return maxSum

*/

function twoSumLessThanTarget(arr, target) {
  arr.sort((a, b) => a - b);

  let left = 0;
  let right = arr.length - 1;
  let maxSum = -1;

  while (left < right) {
    const sum = arr[left] + arr[right];

    if (sum < target) {
      maxSum = Math.max(maxSum, sum);
      left++;
    } else {
      right--;
    }
  }

  return maxSum;
}

// TEST CASES

// Happy Path
console.log(twoSumLessThanTarget([3, 1, 4], 5) === 4);
console.log(twoSumLessThanTarget([3, 1, 4, 3], 6) === 5);

// Invalid
console.log(twoSumLessThanTarget([3], 5) === -1);
console.log(twoSumLessThanTarget([], 5) === -1);

// No Pairs
console.log(twoSumLessThanTarget([3, 1, 4], 1) === -1);

// Negatives
console.log(twoSumLessThanTarget([-3, 1, 4], 5) === 1);

// Additional Test Cases
console.log(twoSumLessThanTarget([8, 2, 4, 9, 5, 10, 1, 7], 16) === 15);
console.log(twoSumLessThanTarget([5, 8, 3, 2, 1], 6) === 5);
console.log(twoSumLessThanTarget([6, 8, 10, 12], 5) === -1);
console.log(twoSumLessThanTarget([1, 2, 3, 4, 5], 100) === 9);
console.log(twoSumLessThanTarget([10, 20, 30, 40, 50], 40) === 30);
console.log(twoSumLessThanTarget([7, 4, 15, 11, 21, 9], 24) === 22);