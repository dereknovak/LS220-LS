recursion to solve a binary tree problem

lessons are trickier than they should be on the assessment

exercise problems to study for assessment

assessment just like 216

visual trick
    - When using a test case, line up `a` and `r` with an array

binary tree is the linked list
graphs are an extention of binary tree

Easty leetcode difficulty
open ended solution for assessment problem

```js
/*
This interview will assess your understanding of Data Structures and Algorithms, with a particular focus on problem-solving skills. Please prepare thoroughly using this study guide. Refer to the course policy for information on retakes.

During the interview, you will be given a coding challenge to solve within 45 minutes. You are expected to follow the problem-solving approach covered in our course:

Understand the problem
Develop examples/test cases
Choose appropriate data structures and algorithms
Verify your algorithm against the examples
Implement your solution
Test Cases and Problem-Solving Approach
As part of the assessment:

You will be given an initial problem statement
You are expected to develop your own test cases to cover various scenarios, including edge cases
Demonstrate your problem-solving approach step-by-step
If desired, you may use the Drawing tool on Coderpad to illustrate your thought process
You will be evaluated on your ability to:

Construct and articulate a clear plan for solving the given problem
Apply appropriate data structures and algorithms to the problem at hand
Write clean, efficient, and well-documented code
Validate your assumptions and debug any issues that arise
Identify opportunities for optimization in your solution
*/
```

# SPOT Session with Scott 11/05

// Implement a recursive function that reverses a given string. The function should take a string as input and return its reverse. For example, if the input is "hello", the function should return "olleh". Solve the problem using recursion.

/* 

PROBLEM
I: A string
O: A string, reversed using recursion

RULES
- Use recursion
- Empty strings return empty
- A single char will return a single char

EXAMPLE
"h" => h
"he" => eh
"hel" =>
    h
    eh
    leh

DATA STRUCTURE
- Convert to an array
- Use string

Base Case: A string of 0 or 1 length
Recursive Definition: A string is reverse if the first char is the last char and the rest is also reversed

"hello"
ello + h


"hello"

olle + h => olleh
reverseString(ello) + h;
oll + e => olle
reverseString(ell) + e;
ol + l => oll
o + l => ol


hello 
string[end] + reverseString(1, end) + string[start]


*/

function reverseString(string) {
  if (string.length < 2) return string;
  return reverseString(string.slice(1)) + string[0];
}

// function reverseString(str) {
//   if (str === "") {
//     return "";
//   }
//   return reverseString(str.substr(1)) + str.charAt(0);
// }


console.log(reverseString("hello") === "olleh");
console.log(reverseString("world") === "dlrow");
console.log(reverseString("a") === "a");
console.log(reverseString("") === "");
console.log(reverseString("recursion") === "noisrucer");

// All test cases should log true.



/*
Recursive definition 
A [data structure] is a [problem definition] if [some condition is true], and the rest of the [data structure] is [problem definition].
*/

# SPOT Session with scott 11/20

- Exercises are closer to difficulty
    - Not the lesson walkthrough
    - Approach as if they have the wordiness of the book problems
- Assessment will provide some test cases
    - More than 216
    - Brandi was not as interested in catching all the test cases
- DOn't be afraid to use built in methods
    - Keep in mind their time complexity
- Don't have to find the most optimized solution, just bring the curve down
- Feed an exercise problem into chat GPT and ask to turn it into a word problem

- Recursion/DaC clue
    - Breakdownable
- Binary Tree
    - Recursive
    - Stack
- LL
    - Two-pointers/Three-pointers

// From Al last week:

// Start/End pointer:
// Commonly used for problems with sorted arrays

// Anchor/runner (slow/fast):
// Commonly used for problems that involve manipulating arrays in place

// K window slide:
// subarr/substr problems

// Binary search:
// used on sorted arrays to make the time complexity of searching for a single value in an array go from O(N) to O(logN)

https://leetcode.com/studyplan/top-interview-150/

// Laren problem'
/*
// *
// You have been given a JSON object that contains keys in 4 cases 
// (camelCase, snake_case, PascalCase, kebab-case). Your task is to 
// implement a function that will normalize all the keys to camelCase.

// Write a function `normalizeKeys(jsonObject)` that takes a JSON object 
// as input and returns a new JSON object with all keys converted to 
// camelCase. You can assume that the input JSON object only contains 
// string keys, string values, and nested JSON objects as values (no arrays 
// or other types).

// Notes
// The function should maintain the structure of the input JSON while changing the keys.
// You can assume that the input JSON is well-formed and the keys properly follow one of the 4 
// casing conventions (camelCase, snake_case, PascalCase, kebab-case).

// Constraints:
// The input JSON object will have at most 100 keys.
// The input JSON object will be limited to a depth of 5.
// The length of each key is at most 50 characters.
// Don’t use regex - this makes the problem more challenging which results in better practice.


// input:
// {
// "first_name": "John",
// "last_name": "Doe",
// "contact_info": {
// "email_address": "john@example.com",
// "phone_number": "123-456-7890"
// }
// }

// output:
// {
// "firstName": "John",
// "lastName": "Doe",
// "contactInfo": {
// "emailAddress": "john@example.com",
// "phoneNumber": "123-456-7890"
// }
// }
// // 
*/

/*
Scott Problem
// Given the root node of a binary tree, implement a
// function that determines which side of the tree is taller/longer. 
// Return 'right' if the right side is longer, and 'left' if the left side is longer, return 'even' if they're the same length.

// The height of the tree is the level of the
// deepest node or the longest path from the root
// to a leaf node.

// The root node is considered to have a height of 1.

// Example

//      1    
//     / \
//    2   3
//   / \
//  4   5

// The height of this binary tree is 3, as the
// longest path from the root node to a leaf node
// (either from 1 to 4 or from 1 to 5) involves 3 nodes.

// The left side of the tree is longer, with a height of 3. The right side has a height of 2. 

class Node {
  constructor(value) {
    this.val = value;
    this.left = null;
    this.right = null;
  }
}

// Helper function for test cases
function buildTree(arr) {
  if (arr.length === 0) {
    return null;
  }

  const nodes = [];

  const val = arr.shift();
  const root = new Node(val);
  nodes.push(root);

  while (arr.length > 0) {
    const curr = nodes.shift();  // 1

    const leftVal = arr.shift(); // 2
    if (leftVal !== null) {
      curr.left = new Node(leftVal);
      nodes.push(curr.left);
    }

    if (arr.length > 0) { // 3
      const rightVal = arr.shift();
      if (rightVal !== null) {
        curr.right = new Node(rightVal);
        nodes.push(curr.right);
      }
    }
  }

  return root;
}

// Test Cases

const tree1 = buildTree([1]);
console.log(getHeight(tree1) === 'even');

const tree2 = buildTree([1, 2, 3, null, null, 4, 5]);
console.log(getHeight(tree2) === 'right');

const tree3 = buildTree([1, 2, 3, null, null, 6, 7, 8, 9]);
console.log(getHeight(tree3) === 'right');

const tree4 = buildTree([1, 2, 3, null, null, 4, 5, null, null, null, 6]);
console.log(getHeight(tree4) === 'right');

const tree5 = buildTree([1, 2, null, 3, null, 4, null, 5, 6, null, null, null, 7]);
console.log(getHeight(tree5) === 'left');

const tree6 = buildTree([1, 2, null, 3, null, 4, null, 5, null, 6, 8, null, 7, null, 9, null, null, null, 10]);
console.log(getHeight(tree6) === 'left');

// All test cases should log true


________________


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

console.log(findProductPrice([[4, 8, 12], [16, 20, 24], [28, 32, 36]], 20) === true);
console.log(findProductPrice([[3, 6, 9], [12, 15, 18], [21, 24, 27]], 27) === true);
console.log(findProductPrice([[1, 3, 5], [7, 9, 11], [13, 15, 17]], 19) === false);
console.log(findProductPrice([[10, 20, 30], [40, 50, 60], [70, 80, 90]], 10) === true);
console.log(findProductPrice([[15, 25, 35], [45, 55, 65], [75, 85, 95]], 5) === false);

// All test cases should return true.
*/

// Study with Daniel

## Notes from my failed attempt
- More test cases than 216
- More intentional with test cases
    - Think more about what each test case is accomplishing
- Come at it from more of a top down approach
- Think of eliminating things rather than moving a pointer
    - Eliminate everything mid onwards
- Use a binary search template
    - Has never had to modify
    - Modify your understanding of the problem rather than modifying the binary search
- Spend time determing things that would break the algo that you made
- DOn't write out algo for a simple binary

- Prioritize possible approaches in terms of likelihood
- Two Pointers
    - Start/End pair it down
    - Clear binary choice
    - Think about what you can eliminate

## Daniel's bsearch templates

```js
function bsearchMin(arr, condition, left = 0, right = arr.length - 1) {
  while (left < right) {
    let mid = left + Math.floor((right - left) / 2);

    if (condition(mid)) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

// at this point, right is the minimal index which satisfies the condition
// or the last element
  return right;
}
idx = bsearchMin(nums, i => nums[i] >= target)
if (nums[idx] === target) return idx
return -1;

function bsearchMax(arr, condition, left = 0, right = arr.length - 1) {

  while (left < right) {
    let mid = left + Math.ceil((right - left) / 2);

    if (condition(mid)) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  return left;
}
```