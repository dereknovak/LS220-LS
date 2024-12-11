/* 

10:25 / 10:33
- Super easy
- My solution is identical to the provided one

PROBLEM
I: A number
O: A number, representing the number of digits in given number

RULES
- Must use recursion

EXAMPLE
12345 => 5
7 => 1

RECURSION
Base Case:
    - Number < 10
Defintion:
    - The number of digits in a number is represented by 1 more than the number of digits when divided by 10

12345 => 1 + 2345#
2345 => 1 + 345#
345 => 1 + 45#
45 => 1 + 4#
4 => return 1
*/

function countDigits(num) {
  if (num < 10) return 1;
  return 1 + countDigits(Math.floor(num / 10));
}

// TEST CASES

// Happy Path
console.log(countDigits(12345) === 5);
console.log(countDigits(1234567890) === 10);
console.log(countDigits(7) === 1);
console.log(countDigits(45) === 2);
console.log(countDigits(0) === 1);
console.log(countDigits(100000) === 6);
console.log(countDigits(99999) === 5);
