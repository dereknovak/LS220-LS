/* 

3:10 // 3:26

PROBLEM
I: A number, representing the max natural number in sequence
O: A number, representing the sum of all natural numbers up to the input

RULES
- Solve recursively
- If 0, return 0

RECURSIVE DEFINITION
The sum of the first n natural numbers can be expressed as n plus the sum of the first n-1 natural numbers.

EXAMPLE
sumOfNaturalNumbers(5) === 15
1 + 2 + 3 + 4 + 5 === 15

sumOfNaturalNumbers(10) === 55
1 + 2 + 3 + 4 + 5 === 15
6 + 7 + 8 + 9 + 10 === 40
15 + 40 === 55

Base = 1
If the input is 1, return 1
Otherwise, return n + sum(n - 1)

input = 5
total = 0

n-1 = 4
n-1 = 3
n-1 = 2 
n-1 = 1

ALGORITHM
1. If input < 2, return input
2. Return n + sum(n - 1)

*/

function sumOfNaturalNumbers(n) {
  if (n < 2) return n;
  return n + sumOfNaturalNumbers(n - 1);
}

console.log(sumOfNaturalNumbers(1) === 1);
console.log(sumOfNaturalNumbers(5) === 15);
console.log(sumOfNaturalNumbers(10) === 55);
console.log(sumOfNaturalNumbers(20) === 210);
console.log(sumOfNaturalNumbers(0) === 0);

// All test cases should log true.