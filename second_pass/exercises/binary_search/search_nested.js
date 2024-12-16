// The Acme Product Development team is working on a new inventory management system that needs to efficiently search through large amounts of product data. The data is organized into a nested array structure called a "matrix", where each inner array represents a category of products. 

// The matrix has two key properties:

// 1. The products within each category are sorted in ascending order by price.
// 2. The lowest priced product in each category is more expensive than the highest priced product in the previous category.

// For example, the matrix might look like this:
// ```
// matrix = [
//     [4, 8, 12], 
//     [16, 20, 24], 
//     [28, 32, 36]
// ]
// ```

// The Acme team needs to write a program that can quickly determine whether a given target product price exists somewhere within this matrix. This is an important feature, as customers will be able to search for products by price range.

// Can you write a function that meets these requirements and explain how it works?

/* 

11:31 // 12:03
- Used Scott's word problem instead of LS problem
- No debugging required
- Went smoothly

PROBLEM
I: A 2D array, with nested arrays containing numbers
I: A number, representing a target value
O: A boolean, representing whether the target value is included in any of the nested arrays

RULES
- Inner arrays are sorted by price (ascending)
- Highest number in one array is smaller than the lowest number in next
    - [1, 2, 3], [4, 5, 6]
- Find the target number within the 2D array
- Will always receive 2 args, array and number
- If array is empty, return false
- Nested arrays may not be the same length
- Arrays could be empty
- Only numbers in arrays
- Could have duplicates

EXAMPLE
[[4, 8, 12], [16, 20, 24], [28, 32, 36]] // target = 20
=> true

DATA STRUCTURE
- Binary Search (2x)
    - Find nested array with number
        - Check if number is > last num
            - Move left to mid + 1
        - If < first number
            - Move right to mid - 1
        - Otherwise
            - Perform second binary search
    - Find the number within the nested array
        - Check if num is > target
            - Move left to mid + 1
        - If < target
            - Move right to mid - 1
        - Otherwise
            - Return true
- Return false if its not found
[[4, 8, 12], [16, 20, 24], [28, 32, 36]] // target = 20
               l   m   r

ALGORITHM
1. Setup
    - Initialize left to 0
    - Initialize right to array length - 1
2. Perform first binary search to find array with value
    - Loop through array (while left <= right)
        - Initialize mid to left + right / 2 (floor)
        - If target is greater than current array last value
            - Reassign left to mid + 1
        - If target is less than current array first value
            - Reassign right to mid - 1
        - Otherwise
            - Return true if includesTarget HELPER
3. Perform second binary search to find value within the array
    - ^^^
4. If nothing is found, return false

HELPERS
includesTarget(arr)
1. Setup
    - Initialize left to 0
    - Initialize right to array length - 1
2. Find Target with binary search
    - Loop through array (while left <= right)
        - Initialize mid to left + right / 2 (floor)
        - If current num > target
            - Move left to mid + 1
        - If current num < target
            - Move right to mid - 1
        - Otherwise
            - Return true
3. If not found, return false
*/

function findProductPrice(matrix, target) {
  let left = 0;
  let right = matrix.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const category = matrix[mid];

    if (target > category[category.length - 1]) {
      left = mid + 1;
    } else if (target < category[0]) {
      right = mid - 1;
    } else {
      return includesTarget(category, target);
    }
  }

  return false;
}

function includesTarget(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] < target) {
      left = mid + 1;
    } else if (arr[mid] > target) {
      right = mid - 1;
    } else {
      return true;
    }
  }

  return false;
}

// TEST CASES

// Happy Path (true)
console.log(findProductPrice([[4, 8, 12], [16, 20, 24], [28, 32, 36]], 20) === true);
console.log(findProductPrice([[4, 8, 12], [16, 20, 24], [28, 32, 36]], 12) === true);
console.log(findProductPrice([[4, 8, 12], [16, 20, 24], [28, 32, 36]], 36) === true);

// Happy Path (false)
console.log(findProductPrice([[1, 3, 5], [7, 9, 11], [13, 15, 17]], 19) === false);
console.log(findProductPrice([[1, 3, 5], [7, 9, 11], [13, 15, 17]], 8) === false);
console.log(findProductPrice([[1, 3, 5], [7, 9, 11], [13, 15, 17]], 2) === false);
console.log(findProductPrice([[3, 5], [7, 9, 11], [13, 15, 17]], 1) === false);

// Different number of nested arrays
console.log(findProductPrice([[4, 8], [12, 16], [20, 24], [28, 32]], 20) === true);

// Empty nested array
console.log(findProductPrice([[], [16, 20, 24], [28, 32, 36]], 20) === true);

// Empty full array
console.log(findProductPrice([], 20) === false);

// Duplicates
console.log(findProductPrice([[4, 8, 12], [16, 20, 20, 24], [28, 32, 36]], 20) === true);

// Different lengths
console.log(findProductPrice([[4, 8], [16, 20, 21, 24], [28, 29, 30, 31, 32, 36]], 20) === true);

// Additional Test Cases
console.log(findProductPrice([[4, 8, 12], [16, 20, 24], [28, 32, 36]], 20) === true);
console.log(findProductPrice([[3, 6, 9], [12, 15, 18], [21, 24, 27]], 27) === true);
console.log(findProductPrice([[1, 3, 5], [7, 9, 11], [13, 15, 17]], 19) === false);
console.log(findProductPrice([[10, 20, 30], [40, 50, 60], [70, 80, 90]], 10) === true);
console.log(findProductPrice([[15, 25, 35], [45, 55, 65], [75, 85, 95]], 5) === false);
