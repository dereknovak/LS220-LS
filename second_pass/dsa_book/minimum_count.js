/* 

11:22 // 12:00
- Determined the need for 2 binary searches quickly
- Logic for finding the max/min of each group took a while
- Only debug at the end was a divider value of 0, which was evaluating falsy

PROBLEM
I: An array of positive and negative integers
O: A number, representing the minimum count of either pos or neg

RULES
- The input array will be in numerical order
- 0 is neither positive or negative
    - Don't count toward its total count
- No repeating numbers to worry about
- If either positives or negatives are missing, the min value returned should be 0

EXAMPLE
[-7, -5, -4, 1, 2, 6, 10]
neg = [-7, -5, -4]
pos = [1, 2, 6, 10]
min = 3

DATA STRUCTURE
- An array
- Binary search x 2
    - >=
    - If equal, return that plus 1
    - First
        - Look for highest negative
        - Reassign divider whenever a valid value is found
        - Return r
    - Second
        - Look for lowest positive
        - Reassign divider whenever a valid value is found
        - Return length - mid
    - Numbers are sorted
    - Keep track of divider

PLAY
[-7, -5, -4, 1, 2, 6, 10]
 l           mr              
negative count => 3
positive count => 4

[1, 2, 3, 4, 5]
rlm         
negative count =>

ALGORITHM
1. Setup
2. Perform negative search
3. Perform positive search
4. Return the minimum of the 2

HELPERS
negativeCount(array)
- Initialize length to array length
- Initialize left to 0
- Initialize right to array length - 1
- Declare divider

- Perform binary search (while left <= right)
    - Initialize mid to left + right / 2 (floor)
    - If value at mid is < -1
        - Reassign divider to mid
        - Reassign left to mid + 1
    - If value at mid is > -1
        - Reassign right to mid - 1
    - Otherwise
        - Return mid + 1

- If divider is undefined, return 0
- Return divider + 1

positiveCount(array)
- Initialize length to array length
- Intialize left to 0
- Initialize right to array length - 1
- Declare divider

- Perform binary search (while left <= right)
    - Initialize mid to left + right / 2 (floor)
    - If value at mid is > 1
        - Reassign divider to mid
        - Reassign right to mid - 1
    - If value at mid is < -1
        - Reassign left to mid + 1
    - Otherwise
        - Return length - mid

- If divider is undefined, return 0
- Return length - divider
*/

function negativeCount(array) {
  const length = array.length;
  let left = 0;
  let right = length - 1;
  let divider;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (array[mid] < -1) {
      divider = mid;
      left = mid + 1;
    } else if (array[mid] > -1) {
      right = mid - 1;
    } else {
      return mid + 1;
    }
  }

  return divider !== undefined ? divider + 1 : 0;
}

function positiveCount(array) {
  const length = array.length;
  let left = 0;
  let right = length - 1;
  let divider;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (array[mid] > 1) {
      divider = mid;
      right = mid - 1;
    } else if (array[mid] < 1) {
      left = mid + 1;
    } else {
      return length - mid;
    }
  }

  return divider ? length - divider : 0;
}

function minimumCount(array) {
  const negatives = negativeCount(array);
  const positives = positiveCount(array);

  return Math.min(negatives, positives);
}

console.log(minimumCount([-4, -3, -2, -1, 3, 4]) === 2);
console.log(minimumCount([-3, 1, 2, 3, 4, 5]) === 1);
console.log(minimumCount([-5, -4, -3, -2, -1]) === 0);
console.log(minimumCount([1, 2, 3, 4, 5]) === 0);
console.log(minimumCount([-2, -1, 1, 2]) === 2);
console.log(minimumCount([-7, -5, -4, 1, 2, 6, 10]) === 3);
console.log(minimumCount([-3, -2, -1, 0, 5, 6]) === 2);
console.log(minimumCount([-1, 0, 1]) === 1);
console.log(minimumCount([]) === 0);