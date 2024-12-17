/* 

10:40 // 10:58

PROBLEM
I: An array of numbers
O: A boolean, representing whether the array consists of a triple

RULES
- The array will be sorted ascending
- Triple
    - One number is triple the value of another number in the array
- Cannot use filter/map/reduce/find
- Cannot use indexOf or lastIndexOf
- Guard clause
    - If empty, return false
    - If only 1 element, return false
- Could have negatives
- Could have duplicates

EXAMPLE
1, 3, 9, 28
   *  *
*  * 
      *  *
=> true

[1, 2, 4, 10, 11, 12]
       *           *
=> true

[0, 5, 7, 55]
=> false

[4, 5, 7, 9, 13, 15, 17]
    *             *
=> true

DATA STRUCTURE
- Use array
- Use a set to capture triples
    - If a number is included in the set
        - Return true
- If negative number, divide by 3

[4, 5, 7, 9, 13, 15, 17]
 
Set = [12, 15, 21, 28, 39]

[-6, -4, -2, 0, 1, 3]

Set = [-2, ]

ALGORITHM
1. Create an empty set for triples
2. Move through the array, returning if a triple relationship exists
    - Loop through array (for..of)
        - Return true if Set has num
        - If current number is positive
            - Add num * 3 to Set
        - Otherwise
            - Add num / 3 to Set
3. If none do, return false
*/

function checkTripleMatch(nums) {
  const triples = new Set();

  for (let num of nums) {
    if (triples.has(num)) return true;
    triples.add(num > 0 ? num * 3 : num / 3);
  }

  return false;
}

// TEST CASES

console.log(checkTripleMatch([1, 3, 9, 28]) === true);
console.log(checkTripleMatch([1, 2, 4, 10, 11, 12]) === true);
console.log(checkTripleMatch([0, 5, 7, 55]) === false);
console.log(checkTripleMatch([4, 5, 7, 9, 13, 15, 17]) === true);

// Empty or 1
console.log(checkTripleMatch([]) === false);
console.log(checkTripleMatch([4]) === false);

// Negatives
console.log(checkTripleMatch([-6, -4, -2, 1]) === true);

// Duplicates
console.log(checkTripleMatch([1, 2, 2, 3, 6, 8]) === true);

console.log(checkTripleMatch([-1, 0, 1]) === false);