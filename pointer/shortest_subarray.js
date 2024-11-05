/* 

9:53 // 10:16 (semi-brute) // 10:43 (optimized)

PROBLEM
I: An array of integers
I: A number, representing a target sum
O: A number, representing the length of a subarray that sums to >= target

RULES
- Find the SHORTEST length of integers
    - If a set has 3 and a set has 2, return the set of 2
- If none sum to >= target, return 0
- Numbers will be positives
- Numbers will be integers
- Can have subarray length of 1


EXAMPLES

DATA STUCTURE
- Pointer (s/e)
    - Max sum is first
        - Narrow it down until a false is found
    - If none is found, return 0

[1, 2, 6, 1, 1, 7] // 9 => 3
             s  e
minSumLength = 3
    - Increment/Decrement smaller value

[1, 2, 6, 1, 1, 7] // 9 => 3
       a        r              
minSumLength = 3
sum = 17

[4, 2, 2, 1, 5, 2] // 14 => 5
    a           r
minSumLength = 5
sum = 12

ALGORITHM
1. Loop through nums, determining the length of consec nums that sum to >= target
    - Initialize start to 0
    - Initialize end to nums length - 1
    - Initialize minSumLength to 0

    - Loop through nums (while start <= end)
        - If nums summed sliced from start => end >= target
            - Reassign minSumLength to (end + 1) - start
        - Otherwise
            - Break from loop
        
        - If num @ start < num @ end
            - Increment start
        - Otherwise
            - Decrement end
2. Return the shortest length that >= target
    - Return minSumLength

APPLICATION 2
[1, 2, 3, 4, 5] // 9 => 2
          a     r
minSumLength = 2
sum = 5

ALGORITHM 2
1. Loop through nums, determining the length of consec nums that sum to >= target
    - Initialize anchor to 0
    - Initialize runner to 1
    - Initialize minSumLength to 0
    - Initialize sum to nums @ anchor;

    - Loop through nums (while runner <= nums.length)
        - If sum < target
            - Add nums @ runner to sum
            - Increment runner
        - Otherwise
            - Reassign minSumLength to runner - anchor
            - Subtract nums @ anchor from sum
            - Increment anchor
2. Return minSumLength
*/

function minLengthForTargetSum(nums, target) {
  let anchor = 0;
  let runner = 1;
  let minSumLength = 0;
  let sum = nums[anchor];

  while (runner <= nums.length) {
    if (sum < target) {
      sum += nums[runner];
      runner++;
    } else {
      minSumLength = runner - anchor;
      sum -= nums[anchor];
      anchor++;
    }
  }

  return minSumLength;
}

function minLengthForTargetSum2(nums, target) {
  let start = 0;
  let end = nums.length - 1;
  let minSumLength = 0;

  while (start <= end) {
    // console.log(end - start, nums.slice(start, end + 1).reduce(sum));
    if (nums.slice(start, end + 1).reduce(sum) >= target) {
      minSumLength = (end + 1) - start;
    } else {
      break;
    }

    if (nums[start] < nums[end]) {
      start++;
    } else {
      end--;
    }
  }

  return minSumLength;
}

const sum = (a, b) => a + b;

console.log(minLengthForTargetSum([1, 2, 3], 5) === 2);
console.log(minLengthForTargetSum([1, 1, 1], 4) === 0);
console.log(minLengthForTargetSum([8, 2, 1, 4], 8) === 1);
console.log(minLengthForTargetSum([1, 2, 3, 4, 5], 9) === 2);
console.log(minLengthForTargetSum([1, 4, 1, 3, 6, 2], 9) === 2);
console.log(minLengthForTargetSum([1, 2, 3, 4], 10) === 4);
console.log(minLengthForTargetSum([1, 2, 6, 1, 1, 7], 9) === 3);
console.log(minLengthForTargetSum([4, 2, 2, 1, 5, 2], 14) === 5);