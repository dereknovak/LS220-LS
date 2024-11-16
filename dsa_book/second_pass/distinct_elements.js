/* 

10:28 // 10:47
- Took a bit long to figure out the logic of when to move anchor vs runner.

PROBLEM
I: A sorted array of integers
O: A number, representing the number of distinct elements in the array

RULES
- Input array will be sorted
- Just return the count of distinct elements
    - Numbers at end do not matter
- Must modify array to the proper form using two-pointers

EXAMPLE
[3, 3, 5, 7, 7, 8]
[3, 5, 7, 8, 3, 7]
distinct => 4

DATA STRUCTURE
- Use the given array
- Two-pointers, anchor/runner
    - Anchor is each unique element
    - Runner moves ahead and swaps the elements to bring distinct elements to the front

[3, 5, 7, 8, 7, 3]
          a        r

- If a/r same
    - Increment runner
- If different
    - anchor increments
    - Swap
    - runner increments
- Return anchor

ALGORITHM
1. Setup
    - Initialize anchor to 0
    - Initialize runner to 1
2. Move repeated elements to end of array
    - Loop through array (while runner < array length)
        - If anchor and runner are different values
            - Increment anchor
            - Swap values @ anchor and runner
        - Increment runner every time
3. Return the index of anchor + 1 (need length and not index)
*/

function compressToDistinct(array) {
  let anchor = 0;
  let runner = 1;

  while (runner < array.length) {
    if (array[anchor] !== array[runner]) {
      anchor++;
      [array[anchor], array[runner]] = [array[runner], array[anchor]];
    }

    runner++;
  }

  return anchor + 1;
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