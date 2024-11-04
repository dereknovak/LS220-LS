/* 

PROBLEM
I: An array of numbers
O: A number, representing the maximum volume that can be contained between 2 barriers

- Volume
    - The length of the barriers

EXAMPLE
[5, 4, 3, 2, 9, 10, 3, 4, 5]  // 40
                | 
             |  | 
             |  | 
             |  | 
             |  | 
             |  | 
 |           |  |        |
 |  |        |  |     |  |
 |  |  |     |  |  |  |  |
 |  |  |  |  |  |  |  |  |
 |  |  |  |  |  |  |  |  |

[2, 9, 5, 10, 5, 6]  // 24
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

DATA STRUCTURE
- Two pointer (S/E)

[2, 9, 5, 10, 5, 6]
       s   e
max = 24
1: 5 * 2 = 10
2: 4 * 6 = 24
3: 3 * 5 = 15
4: 2 * 9 = 18
5: 1 * 5 = 5

[3, 1, 2, 5, 2, 4, 2, 5, 6, 1, 5, 3, 2, 3, 4, 1, 2]
s                                          e
max = 32
32 15 42


ALGORITHM
1. Loop through array, keeping track of maxVolume (while start < end)
    - Determine current volume
        - end - start * minimum value of start/end
    - If current volume is greater than maxVolume, reassign it
    - If start < end
        - increment start
    - Otherwise
        - Decrement end
2. Return maxVolume
*/

function maxRainwater(heights) {
  let start = 0;
  let end = heights.length - 1;
  let maxVolume = -Infinity;

  while (start < end) {
    let currentVolume = (end - start) * Math.min(heights[start], heights[end]);
    maxVolume = Math.max(maxVolume, currentVolume);

    if (heights[start] < heights[end]) {
      start++;
    } else {
      end--;
    }
  }

  return maxVolume;
}

function volume(length, height) {
  return length * height;
}

console.log(maxRainwater([1, 1]) === 1);
console.log(maxRainwater([1, 3]) === 1);
console.log(maxRainwater([1, 2, 1]) === 2);
console.log(maxRainwater([2, 3, 4, 2]) === 6);
console.log(maxRainwater([2, 2, 2, 2, 2]) === 8);
console.log(maxRainwater([2, 9, 5, 10, 5, 6]) === 24);
console.log(maxRainwater([5, 4, 3, 2, 9, 10, 3, 4, 5]) === 40);
console.log(maxRainwater([3, 1, 2, 5, 2, 4, 2, 5, 6, 1, 5, 3, 2, 3, 4, 1, 2]) === 44);
console.log(maxRainwater([2, 2, 13, 9, 1, 15, 2, 5, 9, 7, 5, 3, 6, 3, 4, 1, 4, 5]) === 75);