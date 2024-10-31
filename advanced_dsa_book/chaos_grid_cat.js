/*

10:34 // 11:01 (11:07 after debugging 1 edge case) (no memo)

PROBLEM
I: A 2D matrix
O: A number, representing the number of unique routes that Choas can take

RULES
- The same as previous problem, but with obstacles

EXAMPLE
  ["1, "1, "1],
  ["1, "C", "1],
  ["1, "1, "2],

  ["1, "1, "1, "1, "C"],
  ["1, "C", "1, "2, "2],
  ["1, "1, "2, "C", "2],

DATA STRUCTURE
- Top-down (recursion)
  ["", "", "", "", "C"],
  ["", "C", "", "", ""],
  ["", "", "", "C", ""],

Top (2, 4)
1: (2, 3) + (1, 4) =
2:

  ["", "", ""],
  ["", "C", ""],
  ["", "", ""],
              (2, 2) 2
         1 (2, 1) + (1, 2) 1
       *0* + 1      1 + *0*   

  ["1, "1, "1, "1, "C", "1],
  ["1, "C", "1, "2, "2, "3],
  ["1, "1, "2, "4, "6, "9],
  ["1, "2, "4, "C", "6, 15],
  ["1, "C", "4, "4, "10, "24],
  ["1, "1, "5, "9, "19, "43],

ALGORITHM
1. Determine starting row/col
2. Recursively build the immediate top/left from current
3. Return the result of the recursion

Recursive
Base-Case = 0 if C
            1 If idx === 0
Recursive = (row - 1, col) + (row, col - 1)

*/

function chaosInTheGridWithCats(grid) {
  function sumOfPrevious(row, col) {
    if (grid[row][col] === 'C') {
      return 0;
    }

    if (row === 0 || col === 0) {
      return grid[row].slice(0, col + 1).includes('C') ? 0 : 1;
    }

    return sumOfPrevious(row - 1, col) + sumOfPrevious(row, col - 1);
  }

  return sumOfPrevious(grid.length - 1, grid[0].length - 1);
}

// Test Cases:

const grid1 = [
  ["", "C"],
  ["", ""],
];
const grid2 = [["", "C"]];
const grid3 = [
  ["", "", ""],
  ["", "C", ""],
  ["", "", ""],
];
const grid4 = [
  ["", "", "", "", "C"],
  ["", "C", "", "", ""],
  ["", "", "", "C", ""],
];
const grid5 = [
  ["", "", "", "", "C", ""],
  ["", "C", "", "", "", ""],
  ["", "", "", "", "", ""],
  ["", "", "", "C", "", ""],
  ["", "C", "", "", "", ""],
  ["", "", "", "", "", ""],
];

console.log(chaosInTheGridWithCats(grid1) === 1);
console.log(chaosInTheGridWithCats(grid2) === 0);
console.log(chaosInTheGridWithCats(grid3) === 2);
console.log(chaosInTheGridWithCats(grid4) === 2);
console.log(chaosInTheGridWithCats(grid5) === 43);