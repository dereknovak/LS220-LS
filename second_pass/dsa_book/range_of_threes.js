/* 

3:38 // 4:00
- Did not test at all while working through code
    - Pressed for time going into work
- Everything worked on first try so.........

PROBLEM
I: An array of numbers
O: An array of numbers, representing the start/end index of group of 3s

- If no 3s in input, return [-1, -1]
- Integers will be sorted
- Will always receive an array
- If array is empty, return [-1, -1]
- Could have duplicates of other numbers

EXAMPLE
[1, 2, 3, 3, 3, 3, 3, 4, 5]
       s           e
Return [2, 6]

DATA STRUCTURE
- Array
- Binary Search
    - Finding 2 values (binary search 2x)
    - Numbers are sorted

findStart
[1, 2, 3, 3, 3, 3, 3, 4, 5]
     r l                
- If > 3
    - right = mid - 1
- If < 3
    - left = mid + 1
- If = 3
    - right = mid - 1
    - Reassign start to mid

findEnd
[1, 2, 3, 3, 3, 3, 3, 4, 5]
                    r  lm  r
- If < 3
    - left = mid + 1
- If > 3
    - right = mid - 1
- If = 3
    - left = mid + 1
    - Reassign start to mid


ALGORITHM
1. Validate input
    - If array is empty, return [-1, -1]
2. Find starting index of 3s
    - Use findStart HELPER
3. Find ending index of 3s
    - Use findEnd HELPER
4. Return an array of starting/ending indices

findStart(numbers)
1. Setup
    - Initialize left to 0
    - Initialize right to numbers length - 1
    - Initialize start to -1
2. Perform binary search
    - Loop through the numbers (while left <= right)
        - Initialize mid to left + right / 2 (floor)
        - If value at mid is less than 3
            - Reassign left to mid + 1
        - Otherwise
            - Reassign start to mid if value at mid is equal to 3
            - Reassign right to mid - 1
3. Return start

findEnd(numbers)
1. Setup
    - Initialize left to 0
    - Initialize right to numbers length - 1
    - Initialize end to -1
2. Perform binary search
    - Loop through the numbers (while left <= right)
        - Initialize mid to left + right / 2 (floor)
        - If value at mid is greater than 3
            - Reassign right to mid - 1
        - Otherwise
            - Reassign start to mid if value at mid is equal to 3
            - Reassign left to mid + 1
3. Return end
*/

function findRange(numbers) {
  const start = findStart(numbers);
  const end = findEnd(numbers);

  return [start, end];
}

function findStart(numbers) {
  let left = 0;
  let right = numbers.length - 1;
  let start = -1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (numbers[mid] < 3) {
      left = mid + 1;
    } else {
      if (numbers[mid] === 3) start = mid;
      right = mid - 1;
    }
  }

  return start;
}

function findEnd(numbers) {
  let left = 0;
  let right = numbers.length - 1;
  let end = -1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (numbers[mid] > 3) {
      right = mid - 1;
    } else {
      if (numbers[mid] === 3) end = mid;
      left = mid + 1;
    }
  }

  return end;
}

// TEST CASES

// Happy Path
console.log(findRange([1, 2, 3, 3, 3, 3, 3, 4, 5])); // [2, 6]
console.log(findRange([1, 2, 3, 3, 3, 3, 4, 5])); // [2, 5]

// No 3s
console.log(findRange([1, 2, 5, 5, 6, 9, 10])); // [-1, -1]

// All 3s
console.log(findRange([3, 3, 3, 3, 3])); // [0, 4]

// Duplicates
console.log(findRange([1, 2, 2, 3, 3, 3, 3, 3, 4, 5, 5])); // [3, 7]

// Empty
console.log(findRange([])); // [-1, -1]