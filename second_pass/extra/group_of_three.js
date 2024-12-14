/* 

Create a function that determines whether a set of numbers contains a group of 3 elements that sum to a given target.

nums = [1, 2, 3, 4, 5] // target =  6
=> true
nums = [1, 2, 3, 4, 5] // target = 7
=> false

WORD PROBLEM

You and your friends are on a thrilling treasure hunt, deep in the heart of a mysterious forest. Along the way, you discover a set of ancient stones, each engraved with a number. Legend has it that the stones hold the key to unlocking a hidden treasure, but there's a catch: only a specific combination of three stones will reveal the location of the treasure.

Your task is to determine whether there exists a trio of stones whose values add up to a magical target number, known only as the Treasure Sum. If you find the right combination, the treasure will be yours!

Here’s what you know:
A set of stone values: [1, 2, 3, 4, 5]
The first clue gives you a Treasure Sum of 6.

Can you find a trio of stones whose combined values total 6? If so, you’ve found the key to unlock the treasure! If not, the treasure remains hidden for now.

*/

/* 
10:30 // 10:46
- Created problem myself
- Thought about it briefly before starting

PROBLEM
I: A sorted array
I: A number, representing a target value
O: A boolean, representing whether a group of 3 sums to the target value

RULES
- Group of 3
    - 3 elements in a row

DATA STRUCTURE
- Array
- Binary Search
    - Use numbers around mid
        - If sum > target OR mid + 1 is undefined
            - Eliminate right nums
        - If sum < target OR mid - 1 is undefined
            - Eliminate left nums
        - If sum = target
            - Return true
    - If nothing is found, return false

[2, 5, 7, 10, 12, 15, 18] // target = 22
       lmr  
=> true

[-10, -5, -1, 2, 4, 6] // target = -16
      lmr
=> true

ALGORITHM
1. Setup
    - Initialize left to 0
    - Initialize right to nums length - 1
2. Find a group of 3 that sums to target
    - Loop through nums (while left <= right)
        - Initialize mid to left + right / 2
        - Initialize sum to (mid - 1) + (mid) + (mid + 1)
        - If sum === target
            - Return true
        - If sum > target or mid + 1 is undefined
            - Eliminate right nums
        - Otherwise
            - Eliminate left nums
3. If no group is found, return false

*/

function groupOfThree(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const sum = nums[mid - 1] + nums[mid] + nums[mid + 1];

    if (sum === target) return true;

    if (sum > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return false;
}

// True
console.log(groupOfThree([1, 2, 3, 4, 5], 6) === true);
console.log(groupOfThree([2, 5, 7, 10, 12, 15, 18], 22) === true);
console.log(groupOfThree([2, 5, 7, 10, 12, 15, 18], 45) === true);

// False
console.log(groupOfThree([1, 2, 3, 4, 5], 5) === false);
console.log(groupOfThree([2, 5, 7, 10, 12, 15, 18], 23) === false);

// Sum exists but not in group
console.log(groupOfThree([1, 2, 3, 4, 5], 7) === false);

// Empty
console.log(groupOfThree([], 22) === false);

// Duplicates
console.log(groupOfThree([1, 1, 2, 2, 3, 3], 7) === true);

// Negatives
console.log(groupOfThree([-10, -5, -1, 2, 4, 6], -16) === true);
