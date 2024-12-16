/*

8:18 // 8:32
- Very smooth
- Solution is identical to my first attempt.

PROBLEM
I: A number
O: A boolean, representing whether the number is a valid square

RULES
- Valid Square
    - Has a sqrt
        - 1 => 1
        - 4 => 2
        - 9 => 3
        - ....
- Cannot use any square-root methods
- Must be a positive integer
- 0 returns 0

EXAMPLE
- 16
    - 4 * 4
    - true
- 14
    - 7 * 2
    - false

DATA STRUCTURE
- Binary Search
    - Check if a number * itself === input number
    - If product is too high
        - Eliminate the right numbers
    - If product is too low
        - Eliminate the left numbers
    - If they match
        - Return true
    - Cut numbers in half, then round up

16
[0, 1, 2, 3, 4, 5, 6, 7, 8]
 l           m           r
 => true

23
[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
             lr l                        
 => false

ALGORITHM
1. Setup
    - Initialize left to 0
    - Initialize right to num / 2 (ceil)
2. Perform binary search to find the square root
    - Loop through possible sqrts (while left <= right)
        - Initialize mid to left + right / 2 (floor)
        - Initialize square to mid * mid

        - If square === num
            - Return true
        
        - If square < num
            - Eliminate left nums
        - Otherwise
            - Eliminate right nums
3. If no square root, return false
*/

function isSquareInteger(num) {
  let left = 0;
  let right = Math.ceil(num / 2);

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const square = mid * mid;

    if (square === num) return true;

    if (square < num) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return false;
}

console.log(isSquareInteger(0) === true);
console.log(isSquareInteger(1) === true);
console.log(isSquareInteger(4) === true);
console.log(isSquareInteger(16) === true);
console.log(isSquareInteger(14) === false);
console.log(isSquareInteger(23) === false);
console.log(isSquareInteger(25) === true);
console.log(isSquareInteger(26) === false);

// All test cases should log true.