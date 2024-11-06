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