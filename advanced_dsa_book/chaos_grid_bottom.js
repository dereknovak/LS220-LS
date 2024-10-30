function chaosInTheGrid(grid) {
  let rows = grid.length;
  let cols = grid[0].length;

  for (let i = 0; i < rows; i++) {
    grid[i][0] = 1;
  }

  for (let i = 0; i < cols; i++) {
    grid[0][i] = 1
  }

  for (let row = 1; row < rows; row++) {
    for (let col = 1; col < cols; col++) {
      grid[row][col] = grid[row][col - 1] + grid[row - 1][col];
    }
  }

  return grid[rows - 1][cols - 1];
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
