/* 

11:12 // 11:46 (sorted)

PROBLEM
I: A 2D array, containing numbers that represent a start/end time for room
O: A number, representing the min number of rooms required so no 2 interviews overlap

RULES
- Each subarray is an interview
    - Has start/end times
- Need to find the number of rooms requires so no 2 interviews overlap

EXAMPLE
[[20, 25], [10, 15], [0, 25]] === 2
[0, 25]
[10, 15] / [20, 25]

[[1, 2], [3, 4], [5, 6]] === 1
[1, 2] / [3, 4] / [5, 6]

[[0, 5], [1, 3], [2, 6], [4, 7], [5, 9], [8, 10]] === 3
[0, 5] [5, 9]
[1, 3] [4, 7]
[2, 6] [8, 10]

DATA STRUCTURE
- Sort the array by the first value in subarray
- Anchor/Runner

[[20, 25], [10, 15], [0, 25]] === 2
[[0, 25], [10, 15], [20, 25]]
            s            e
rooms = 2  


[[0, 5], [1, 3], [2, 6], [4, 7], [5, 9], [8, 10]] === 3
           s       e
rooms = 3
- If first value of runner >= last value of anchor
    - Decrement rooms by 1
    - Decrement e by 1

[[1, 2], [2, 3], [3, 4], [4, 5]]
s           e
rooms = 1

APPLICATION
[[1, 5], [2, 3], [4, 6], [5, 7]]) === 2
[[1, 5], [2, 3], [4, 6], [5, 7]]
            s       e
rooms = 2

[[1, 4], [2, 5], [3, 6]] === 3
            s        e

ALGORITHM
1. Sort the 2d array by its starting number
    - Call sorted
2. Loop through sorted array, removing required rooms as matches are found
    - Initialize start to 0
    - Initialize end to interviews length - 1
    - Initialize rooms to interviews length

    - Loop through interviews (while start < end)
        - If first value of interviews @ end is >= last value of interviews @ start
            - Decrement rooms by 1
            - Decrement end by 1
        - Otherwise
            - Increment start by 1
3. Return the room count
*/

function rooms(interviews) {
  interviews.sort((a, b) => a[0] - b[0]);

  let start = 0;
  let end = interviews.length - 1;
  let roomCount = interviews.length;

  while (start < end) {
    if (interviews[end][0] >= interviews[start][1]) {
      roomCount--;
      end--;
    } else {
      start++;
    }
  }

  return roomCount;
}

console.log(rooms([[20, 25], [10, 15], [0, 25]]) === 2);
console.log(rooms([[5, 9], [1, 3]]) === 1);
console.log(rooms([[1, 2], [3, 4], [5, 6]]) === 1);
console.log(rooms([[1, 4], [2, 5], [3, 6]]) === 3);
console.log(rooms([[1, 3], [3, 6], [6, 8]]) === 1);
console.log(rooms([[1, 10]]) === 1);
console.log(rooms([[1, 3], [2, 4], [4, 6]]) === 2);
console.log(rooms([[1, 5], [2, 3], [4, 6], [5, 7]]) === 2);
console.log(rooms([[0, 5], [1, 3], [2, 6], [4, 7], [5, 9], [8, 10]]) === 3);
console.log(rooms([[1, 2], [2, 3], [3, 4], [4, 5]]) === 1);
console.log(rooms([[1, 20], [5, 10], [11, 15], [16, 18]]) === 2);
console.log(rooms([[1, 4], [1, 3], [1, 2], [1, 5]]) === 4);