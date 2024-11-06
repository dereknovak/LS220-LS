/* 

5:51 // 6:16 
- Used hint, but figured out quickly aftwards
- Got hung up on finding the highest peak, rather than just finding 1 peak

PROBLEM
I: An array of positive integers, representing a terrain with hills
O: An integer, representing the index of a peak in the terrain

- What is a peak?
    - A number that is greater than its neighbor/neighbors

RULES
- Peak is higher than neighbors, so just look for the max number

EXAMPLE
[1, 3, 2, 1, 5, 4]
             |  
             |  |
             |  |
    |        |  |
    |  |     |  |
 |  |  |  |  |  |
 0  1  2  3  4  5

Return either 1 or 4

DATA STUCTURE
- Binary search
    - Searching for a specific number
- Check the numbers adjacent to m
    - If larger, go that way

[1, 2, 3, 4, 5, 7, 3]
             l  m   r

[1, 2, 3, 4, 5, 4, 3, 2, 1]
l            m           r

ALGORITHM
1. Search the terrain using binary search and return a peak
    - Initialize left to 0
    - Initialize right to terrain length - 1

    - Loop through terrain (while left <= right)
        - Initialize mid to left + right / 2 (floor)
        - If mid - 1 is greater than mid
            - Reassign right to mid - 1
        - If mid + 1 is greater than mid
            - Reassign left to mid + 1
        - Otherwise
            - Return mid

*/

function findPeakInTerrain(terrain) {
  let left = 0;
  let right = terrain.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (terrain[mid - 1] > terrain[mid]) {
      right = mid - 1;
    } else if (terrain[mid + 1] > terrain[mid]) {
      left = mid + 1;
    } else {
      return mid;
    }
  }
}

console.log(findPeakInTerrain([1, 2, 1]) === 1);
console.log(findPeakInTerrain([1, 3, 4, 1]) === 2);
console.log(findPeakInTerrain([3, 2, 1]) === 0);
console.log(findPeakInTerrain([1, 2, 3]) === 2);
console.log([1, 4].includes(findPeakInTerrain([1, 3, 2, 1, 5, 4])));
console.log(findPeakInTerrain([1, 2, 3, 4, 5, 7, 3]) === 5);
console.log(findPeakInTerrain([1, 2, 3, 4, 3, 2, 1]) === 3);
console.log([0, 8].includes(findPeakInTerrain([5, 4, 3, 2, 1, 2, 3, 4, 5])));
console.log(findPeakInTerrain([1, 2, 3, 4, 5, 4, 3, 2, 1]) === 4);
console.log(findPeakInTerrain([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]) === 0);
console.log(findPeakInTerrain([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) === 9);
console.log(findPeakInTerrain([1]) === 0);
