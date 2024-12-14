// You are given a grid represented as a nested array filled
// with empty strings. Chaos, the puppy, is standing at the
// top-left corner of the grid and can move either down or right
// at any point in time. Determine the number of distinct paths
// Chaos can take to reach a bowl of treats placed at the
// bottom-right corner of the grid.

// Define a function `chaosInTheGrid` that, given a nested
// array, returns the number of unique paths that Chaos
// can take to reach the bottom-right corner.

// The grid will have at least 1 row and 1 column.

// Example:

// Given the following 2x3 grid:

const grid = [
  ["", "", ""],
  ["", "", ""],
];

// There are three distinct path Chaos can take:
// 1. Right -> Right -> Down
// 2. Right -> Down -> Right
// 3. Down -> Right -> Right

/* 

11:14 // 11:33
- Did this problem before, remembered most of the approach
- Took some time to remember the recursion

PROBELM
I: A 2D array, with inner arrays containing empty strings
O: A number, representing the number of unique paths possible to go from the top left to the bottom right

RULES
- Can only move right and down
- Grid will have at least 1 row and 1 column
- If only 1 row/col, return 1

EXAMPLE
[
  ["", ""],
  ["", ""],
]
=> 2

[
  ["o", "", ""],
  ["", "", ""],
  ["", "", "o"],
]
=> 6

DATA STRUCTURE
- Nested array

[
  ["1", "1", "1", "1"],
  ["1", "2", "3", "4"],
  ["1", "3", "6", "10"],
  ["1", "4", "10", "20"],
]

Recursion
Base Case:
- If row/col index is 0, return 1
Recursive Definition:
- A plot is the sum of the plot at the previous row plus the plot at the previous column
*/

function chaosInTheGrid(grid) {
  let row = grid.length - 1;
  let col = grid[0].length - 1;
  const cache = new Map();

  function determinePlot(row, col) {
    if (!row || !col) return 1;

    const coord = `${row}, ${col}`;
    if (cache.has(coord)) return cache.get(coord);

    const sum = determinePlot(row - 1, col) + determinePlot(row, col - 1);
    cache.set(coord, sum);
    
    return sum;
  }

  return determinePlot(row, col);
}

// Test cases

const grid1 = [[""]];
const grid2 = [
  ["", ""],
  ["", ""],
];
const grid3 = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];
const grid4 = [
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
];
const grid5 = [
  ["", "", "", "", "", ""],
  ["", "", "", "", "", ""],
  ["", "", "", "", "", ""],
  ["", "", "", "", "", ""],
  ["", "", "", "", "", ""],
  ["", "", "", "", "", ""],
];
console.log(chaosInTheGrid(grid1) === 1);
console.log(chaosInTheGrid(grid2) === 2);
console.log(chaosInTheGrid(grid3) === 6);
console.log(chaosInTheGrid(grid4) === 15);
console.log(chaosInTheGrid(grid5) === 252);
// All test cases should log true