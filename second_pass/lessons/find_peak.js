/* 

11:00 // 11:20
- Tried to complicate problem by adding additional rules, but that made the binary search not possible
    - Flat terrain... rules explicitly do not allow for this. Now I see why
- Would've solved in < 15 mins without this addition.

PROBLEM
I: An array of numbers, representing terrain levels
O: A number, representing the peak index of any hills

RULES
- The peak of a hill is the highest number in its surrounding
    - 1, 2, 3, 1
            ^
- There may be multiple hills, just need to return 1 of them
- Will always receive an array arg
-  If empty, return null

EXAMPLE
[1, 3, 2, 1, 4, 5]
    ^           ^

DATA STRUCTURE
- An array
- Binary Search
    - Finding an index value and can use its surrounding elements
    - If the direction goes up, eliminate other side
    - Break if neither go up or down

[1, 3, 4, 1]
 l  m     r

APPLICATION
[1, 1, 1, 1, 1, 2, 2, 1]
 l        m            r

ALGORITHM
1. Setup
    - Initialize left to 0
    - Initialize right to terrain length - 1
2. Search for hills
    - Loop through terrain (while left <= right)
        - Initialize mid to left + right / 2 (floor)
        - If value @ mid + 1 > value @ mid
            - Eliminate the left elements
        - If value @ mid - 1 > value @ mid
            - Eliminate the right elements
        - Otherwise
            - Return mid
*/

function findPeakInTerrain(terrain, left = 0, right = terrain.length - 1) {
  if (terrain.length < 2) return null;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (terrain[mid + 1] > terrain[mid]) {
      left = mid + 1;
    } else if (terrain[mid - 1] > terrain[mid]) {
      right = mid - 1;
    } else {
      return mid;
    }
  }
}

// TEST CASES

// Happy Path
console.log(findPeakInTerrain([1, 2, 1]) === 1);
console.log(findPeakInTerrain([1, 3, 4, 1]) === 2);
console.log(findPeakInTerrain([3, 2, 1]) === 0);
console.log(findPeakInTerrain([1, 2, 3]) === 2);

// No Hills
console.log(findPeakInTerrain([3]) === null);
console.log(findPeakInTerrain([]) === null);

// Multiple Hills
console.log(findPeakInTerrain([1, 2, 1, 2, 1]) === 1 || findPeakInTerrain([1, 2, 1, 2, 1]) === 3);

// Additional Test Cases
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

