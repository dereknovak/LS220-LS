/* 

10:37 // 11:47
- Had to look at hint and a small bit of the walkthrough (upto "Now what...?")

PROBLEM
I: An array of numbers
I: A number, representing a target value
O: A number, representing the minimumlength of a range of numbers that sums to >= target

- Contiguous subarray
    - Numbers are consecutive
- Search for the min length

EXAMPLE
[4, 2, 5, 7], target = 10

[4, 2] => 6
[4, 2, 5] => 11
[4, 2, 5, 7] => 18
[2, 5] => 7
[2, 5, 7] => 14
[5, 7] => 12

[1, 4, 1, 3, 6, 2] // target = 9
[3, 6] => 9 => minLength = 2

minLength = 2
[1, 4, 1, 3, 6, 2]
 l     m        r 
       i
1. [1, 4, 1] X
   [1, 3, 6, 2]
2. [4, 1, 3] X
   [3, 6]
3. [1, 3] X
   [3, 6, 2]
4. [3, 6]
   [6, 2] X
5. [3] X
   [3, 6]
17 [6] X
   [6] X

[4, 2, 2, 1, 5, 2] // target = 14
 l     m     r

ALGORITHM
1. Perform binary search on array
2. For both left and right subarrays (l/m and m/r), find minimum length that >= target.
3. If left has a result, move right by 1
4. If right has a result, move left by 1 
5. If neither has a result, move l/r that is smaller

[1, 4, 1]

*** AFTER HINT ***
- Perform a binary search on the possible lengths of the array
    - If a match is found, move right to mid - 1
        - Assign minLength to that length
    - If a match is not found, move left to mid + 1
- Use window slide to sum numbers

target = 9
nums = [1, 4, 1, 3, 6, 2]
              a     r
sum = 10
lengths = [1, 2, 3, 4, 5, 6]
           lm  r
minLength = 0;

0 1 5 6 8 10
*/

function minLengthForTargetSum(nums, target) {
  let left = 1;
  let right = nums.length;
  let minLength = 0;
  
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let result = isValidLength(nums, target, mid);

    if (result) {
      right = mid - 1;
      minLength = mid;
    } else {
      left = mid + 1;
    }
  }

  return minLength;
}

function isValidLength(nums, target, range) {
  let anchor = 0;
  let runner = 0;
  let sum = 0;

  while (runner < nums.length) {
    sum += nums[runner];

    if (runner - anchor === range) {
      sum -= nums[anchor];
      anchor++
    }

    runner++
    if (sum >= target) return true;
  }

  return false;
}

console.log(minLengthForTargetSum([1, 2, 3], 5) === 2);
console.log(minLengthForTargetSum([1, 1, 1], 4) === 0);
console.log(minLengthForTargetSum([8, 2, 1, 4], 8) === 1);
console.log(minLengthForTargetSum([1, 2, 5, 4, 3], 9) === 2);
console.log(minLengthForTargetSum([1, 4, 1, 3, 6, 2], 9) === 2);
console.log(minLengthForTargetSum([1, 2, 3, 4], 10) === 4);
console.log(minLengthForTargetSum([1, 2, 6, 1, 1, 7], 9) === 3);
console.log(minLengthForTargetSum([4, 2, 2, 1, 5, 2], 14) === 5);