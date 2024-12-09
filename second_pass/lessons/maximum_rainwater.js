/* 

10:38 // 11:01
- Very seemless
- No debugging required
- Solved before, but still efficient

PROBLEM
I: An array of numbers, representing barrier heights
O: A number, representing the maximum volume of rainwater captured between 2 barriers

RULES
- Array will always have 2 values
- Can have duplicates in a row
- Numbers will always be > 0

EXAMPLE
[1, 2, 1]
    |  
 |  |  | 
 => 2

[2, 3, 4, 2]
       |
    |  |  
 |  |  |  |
 |  |  |  |
3 * 2 = 6
2 * 2 = 4
1 * 3 = 3

[2, 9, 5, 10, 5, 6]
          |
    |     |
    |     |
    |     |
    |     |     |
    |  |  |  |  |
    |  |  |  |  |
    |  |  |  |  |
 |  |  |  |  |  |
 |  |  |  |  |  |
 4 * 6 = 24
 2 * 9 = 18

DATA STRUCTURE
- Use array
- 2 pointers (start/end)
    - Eliminate heights that are smaller
    - Each iteration, check if volume is the max
        - Volume = s - e * smaller of heights
        - If so, reassign max variable

[2, 9, 5, 10, 5, 6]
    s      e

maxVolume = 24

ALGORITHM
1. Setup
    - Initialize start to 0
    - Initialize end to heights length - 1
    - Initialize maxVolume to 0 
2. Determine maxVolume using start/end 2-pointers
    - Loop through heights (start < end)
        - Determine current volume
        - Reassign maxVolume to the max of either currVolume or maxVolume
        - If value at start < value at end
            - Increment start
        - Otherwise
            - Decrement end
3. Return the maxVolume
*/

function maxRainwater(heights) {
  let start = 0;
  let end = heights.length - 1;
  let maxVolume = 0;

  while (start < end) {
    const currVolume = (end - start) * Math.min(heights[start], heights[end]);
    maxVolume = Math.max(maxVolume, currVolume);

    if (heights[start] < heights[end]) {
      start++;
    } else {
      end--;
    }
  }

  return maxVolume;
}

// TEST CASES

console.log(maxRainwater([1, 2, 1]) === 2);
console.log(maxRainwater([2, 3, 4, 2]) === 6);
console.log(maxRainwater([1, 3]) === 1);
console.log(maxRainwater([2, 9, 5, 10, 5, 6]) === 24);

// Duplicates
console.log(maxRainwater([1, 1]) === 1);
console.log(maxRainwater([2, 2, 2, 2, 2]) === 8);

// Additional Test Cases
console.log(maxRainwater([5, 4, 3, 2, 9, 10, 3, 4, 5]) === 40);
console.log(maxRainwater([3, 1, 2, 5, 2, 4, 2, 5, 6, 1, 5, 3, 2, 3, 4, 1, 2]) === 44);
console.log(maxRainwater([2, 2, 13, 9, 1, 15, 2, 5, 9, 7, 5, 3, 6, 3, 4, 1, 4, 5]) === 75);
