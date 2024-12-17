/*

11:35 // 11:55
- Passed all additional first try
- Had to debug for a second
    - While condition was original `while (a && t)`, wasn't thinking
- Didn't need a full `if...else` statement
    - Could've just used an `if` statement as `t` always increments

PROBLEM
I: An array, representing appetites of pets
I: An array, representing treat sizes
O: A number, representing the maximum number of satisfied pets

RULES
- Pet will be satisfied if treat is >= its appetite level
- Once a treat has been given, it cannot be used again
- If no treats, return 0
- If no appetites, return 0

EXAMPLE
appetites = [3, 4, 2] (max of 3)
treatSize = [1, 2, 3] (max of 3)
3 => 3
4 => Can't ever be satisfied
2 => 2
return => 2

appetites = [1, 5] (max of 2)
treatSize = [5, 5, 6]
5 => 5
1 => 5
return => 2

DATA STRUCTURE
- Use both arrays
- Sort arrays
- If treat does not satisfy
    - Increment treat
- If treat satisfied
    - Increment appetite
    - Increment treat

appetites = [3, 4, 2] => [2, 3, 4]
                             a
treatSize = [1, 2, 3] => [1, 2, 3]
                                t
satisfied = 2

ALGORITHM
1. Sort both appetites and treatSize ascending
2. Determine how many pets are satisfied using 2 pointers
    a. Setup
        - Initialize a to 0
        - Initialize t to 0
        - Initialize satisfied to 0
    b. Loop through both appetites and treatSize (while both are truthy)
        - If t < a
            - Increment t
        - Otherwise
            - Increment satisfied
            - Increment a
            - Increment t
3. Return the number of satisfied pets

*/

function assignTreats(appetites, treatSize) {
  appetites = appetites.sort((a, b) => a - b);
  treatSize = treatSize.sort((a, b) => a - b);

  let a = 0;
  let t = 0;
  let satisfied = 0;

  while (a < appetites.length && t < treatSize.length) {
    if (treatSize[t] < appetites[a]) {
      t++;
    } else {
      satisfied++;
      a++;
      t++;
    }
  }

  return satisfied;
}

// TEST CASES

// Happy Path
console.log(assignTreats([3, 4, 2], [1, 2, 3]) === 2);
console.log(assignTreats([1, 5], [5, 5, 6]) === 2);
console.log(assignTreats([1, 2, 3], [3]) === 1);
console.log(assignTreats([3, 6, 5], [4, 7, 2, 3]) === 2);

// None Satisfied
console.log(assignTreats([5, 4, 5], [1, 2, 3]) === 0);

// Empties
console.log(assignTreats([], [1, 2, 3]) === 0);
console.log(assignTreats([1, 2, 3], []) === 0);

// Additional Test Cases
console.log(assignTreats([2], [1, 2, 1, 1]) === 1);
console.log(assignTreats([4, 3, 1], [2, 1, 3]) === 2);
console.log(assignTreats([1,2,3], [1,2,3]) === 3);
console.log(assignTreats([4, 5, 6], [1,2,3]) === 0);