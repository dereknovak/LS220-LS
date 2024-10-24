/* 

5:26 // 5:53

PROBLEM
I: An array of numbers
O: A number, representing the count of distinct elements

RULES
- Distinct element
    - All unique values in the array
    - Determine a count of all distinct elements in the array
        - Return this value

EXAMPLE
[3, 3, 5, 7, 7, 8]
3, 5, 7, 8

DATA STRUCTURE
- Use a Map object
    - If map already has the object, don't increment the count

[1, 2, 3, 4, 5, 1, 2, 4, 2]
             a           r
usedNumbers = {1: true, 

ALGORITHM
1. Initialize a new map object (usedNumbers)
2. Iterate through numbers using anchor/runner
    - Initialize distinctCount to 0
    - Initialize anchor to 0
    - Initialize runner to 0

    - Use a while loop (while runner is less numbers length)
        - If element at runner is not in usedNumbers
            - Increment distinctCount by 1
            - Set number to true in usedNumbers
            - Swap element at anchor and runner
            - Increment anchor and runner by 1
        - Otherwise
            - Increment runner by 1
3. Return the distinctCount
*/

function compressToDistinct(array) {
  const usedNumbers = new Map();
  let distinctCount = 0;
  let anchor = 0;
  let runner = 0;

  while (runner < array.length) {
    let currentNumber = array[runner];

    if (!usedNumbers.has(currentNumber)) {
      distinctCount += 1;
      usedNumbers.set(currentNumber, true);
      [array[anchor], array[runner]] = [array[runner], array[anchor]];
      
      anchor++
      runner++
    } else {
      runner++
    }
  }

  return distinctCount;
}

function testCompressToDistinct(array, expectedLength) {
  const originalReference = array;
  const resultLength = compressToDistinct(array);
  const isSameObject = originalReference === array;
  const isLengthCorrect = resultLength === expectedLength;
  const isModifiedCorrectly = array.slice(0, expectedLength).every((val, idx, arr) => idx === 0 || val > arr[idx - 1]);

  return isSameObject && isLengthCorrect && isModifiedCorrectly;
}

console.log(testCompressToDistinct([3, 3, 5, 7, 7, 8], 4));
console.log(testCompressToDistinct([1, 1, 2, 2, 2, 3, 4, 4, 5], 5));
console.log(testCompressToDistinct([0], 1));
console.log(testCompressToDistinct([-5, -3, -3, -1, 0, 0, 0, 1], 5));
console.log(testCompressToDistinct([6, 6, 6, 6, 6, 6, 6], 1));