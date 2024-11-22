/* 
Solved in about 3 minutes

Base Case:
    - If num is 1, return 1
Recursive Definition:
    - A factorial is a number plus the factorial of the previous number

*/

function factorial(num) {
  if (num < 2) return num;
  return num + factorial(num - 1);
}

// Test Cases

console.log(factorial(5) === 15);
console.log(factorial(4) === 10);
console.log(factorial(3) === 6);
console.log(factorial(2) === 3);
console.log(factorial(1) === 1);
console.log(factorial(0) === 0);

// Additional Test Cases

console.log(factorial(20) === 210);
console.log(factorial(10) === 55);