/* 

9:45 // 10:20
- Embarassing performance
    - Got hung up on tracking the indicies of window. Spent a lot of time debugging.

PROBLEM
I: An array of numbers
I: A number, representing the length of each subarray
O: An array of all the averages of groups

RULES
- The second input represents the length of each subarray
- K will be an integer
- First arg will be an array
- If invalid, return null

EXAMPLE
[1, 2, 3, 4, 5, 6] // 3
[1, 2, 3] => 2
[2, 3, 4] => 3
[3, 4, 5] => 4
[4, 5, 6] => 5
=> [2, 3, 4, 5]

DATA STRUCTURE
- An array for the input
    - Use a window slide
        - Create window first
            - If window cannot be created, return null
        - Slide window, pushing averages to output array
            - Keep track of a total sum, push sum / K to output
- An array for the output

[1, 2, 3, 4, 5, 6]
 a     r
sum      = 6
averages = [2, 3, 4, 5]

- Increment runner until k - 1
    - Add num to sum, then increment
- While r is less than array length
    - Push sum / K to averages
    - Subtract a from sum
    - Increment a
    - Increment r
    - Add r to add

ALGORITHM
1. Setup
    - Initialize anchor to 0
    - Initialize runner to 0
    - Initialize sum to 0
    - Initialize averages to []
2. Create window
    - Loop through numbers (while runner < k - 1)
        - Add number at anchor to sum
        - Increment anchor
3. Push averages of window to averages array
    - Loop through rest of numbers (while runner < numbers length)
        - Push sum / k to averages
        - Reassign sum to sum - number at anchor
        - Increment anchor
        - Increment runner
        - Reassign sum to sum + number at runner
4. Return averages array
*/

function findAverages(numbers, k) {
  if (k > numbers.length) return null;

  let anchor = 0;
  let runner = 0;
  let sum = numbers[runner];
  const averages = [];

  while (runner < k - 1) {
    runner++;
    sum += numbers[runner];
  }

  while (runner < numbers.length) {
    averages.push(sum / k);
    sum -= numbers[anchor];
    anchor++;
    runner++;
    sum += numbers[runner];
  }

  return averages;
}

// TEST CASES

// Happy Path
console.log(findAverages([1, 2, 3, 4, 5, 6], 3)); // [ 2, 3, 4, 5 ]
console.log(findAverages([1, 2, 3, 4, 5, 6], 5)); // [ 3, 4 ]
console.log(findAverages([1, 2, 3, 4, 5, 6], 1)); // [ 1, 2, 3, 4, 5, 6 ]
console.log(findAverages([1, 2, 3, 4, 5, 6], 2)); // [ 1.5, 2.5, 3.5, 4.5, 5.5 ]

// Empty
console.log(findAverages([], 3)); // null

// Invalid
console.log(findAverages([1], 3)); // null

// Additional Test Cases
console.log(findAverages([1, 2, 3, 4, 5], 2));    // [1.5, 2.5, 3.5, 4.5]
console.log(findAverages([10, 20, 30, 40, 50], 4)); // [ 25, 35 ]
console.log(findAverages([5, 5, 5, 5, 5], 1));      // [ 5, 5, 5, 5, 5 ]
console.log(findAverages([1, 3, 2, 6, -1, 4, 1, 8, 2], 5)); // [2.2, 2.8, 2.4, 3.6, 2.8]