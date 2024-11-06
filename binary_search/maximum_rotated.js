/* 

6:30 // 6:56
- Do not like my solution

PROBLEM
I: An array of integers
O: An integer, representing the maximum integer in the array

RULES
- Should have O(logN) time complexity
- Array has been shifted by a random amount of positions
    - [1, 2, 3]
    - [2, 3, 1]
    - Array is still sorted, but is shifted

EXAMPLE
[8, 9, 10, 2, 5, 6]

DATA STRUCTURE
- Using the array
- Use binary search
    - We're finding a value
    - Go in the direction of the higher number
    - If neither are increasing, then you've found the max

[8, 9, 10, 2, 5, 6]
l       m        r

[7, 8, 2, 3, 4, 5, 6]
l         m        r

[9, 10, 11, 12, 13, 14, 15, 1, 2, 3]
                        lr        

- Go in the direction that is higher UNLESS it is less than the left value

APPLICATION
[45, 47, 49, 51, 53, 55, 57, 59, 61, 63, 44]
                                 l    m    r
[7, 8, 2, 3, 4, 5, 6]
   lmr          

ALGORITHM
1. Loop through the nums until the max is found
    - Initialize left to 0
    - Initialize right to nums length - 1

    - Loop through nums (while left <= right)
        - Initialize mid to left + right / 2 (floor)
        - If mid + 1 is greater than mid AND mid + 1 is greater than left
            - Reassign left to mid + 1
        - If mid - 1 is greater than mid
            - Return mid - 1
        - If mid - 1 is less than mid
            - right to mid - 1
        - Otherwise
            - Return mid

    - Return left
*/

function findMax(nums) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid + 1] > nums[mid] && nums[mid + 1] > nums[left]) {
      left = mid + 1;
    } else if (nums[mid - 1] > nums[mid]) {
      return nums[mid - 1];
    } else if (nums[mid - 1] < nums[mid]) {
      right = mid - 1;
    } else {
      return nums[mid];
    }
  }

  return nums[left];
}

console.log(findMax([8, 9, 10, 2, 5, 6]) === 10);
console.log(findMax([15, 18, 2, 3, 6, 12]) === 18);
console.log(findMax([7, 8, 2, 3, 4, 5, 6]) === 8);
console.log(findMax([3, 1]) === 3);
console.log(findMax([5]) === 5);
console.log(findMax([9, 10, 11, 12, 13, 14, 15, 1, 2, 3]) === 15);
console.log(findMax([4, 5, 1, 2, 3]) === 5);
console.log(findMax([23, 34, 38, 40, 41, 14, 15, 16, 17, 18, 19, 20, 21]) === 41);
console.log(findMax([100, 200, 300, 400, 500]) === 500);
console.log(findMax([45, 47, 49, 51, 53, 55, 57, 59, 61, 63, 44]) === 63);
console.log(findMax([11, 13, 15, 17, 19, 21, 1, 3, 5, 7, 9]) === 21);