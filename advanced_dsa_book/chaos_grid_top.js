/*
Solved without help in roughly 20 mins without memo
       
  [1, 1,  1,  1,  1,  1],
  [1, "", "", "", "", ""],
  [1, "", "", "", "", ""],
  [1, "", "", "", "", ""],
  [1, "", "", "", "", ""],
  [1, "", "", "", "", ""], r
                        c

row = 5
col = 6

currentPosition = sumOfPrevious(row, col - 1) + sumOfPrevious(row - 1, col)
Base case = 1
*/

function chaosInTheGrid(grid) {
  function sumOfPrevious(row, col) {
    if (row === 0 || col === 0) return 1;
    return sumOfPrevious(row, col - 1) + sumOfPrevious(row - 1, col);
  }

  return sumOfPrevious(grid.length - 1, grid[0].length - 1);
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