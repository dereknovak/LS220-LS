/* 

8:51 // 9:07
- Solution is the same, except the base case is slightly more complex code
- Recursive definition is similar, just not as elegant
- Had to debug at the end
    - Originally had base case use Math.ceil === 1, but this did not account for 0

PROBLEM
I: A number
O: A number, representing the number of digits in input number

RULES
- Use recursion

Base Case:
- If number / 10 floor === 0, return 1
Recursive Definition:
- A digit's length is determined by 1 more than the length of the numbers / 10.

1234(4) + 5(1) => 5
123(3) + 4(1) => 4
12(2) + 3(1) => 3
1(1) + 2(1) => 2
1 => base case

- Each iteration, divide num by 10, then floor
- If / 10 ceil === 1, return 1

ALGORITHM
1. Base Case
    - If num / 10 ceil === 1, return 1
2. Recursion
    - recurse(number / 10) + 1

APPLICATION
100000
10000
*/

function countDigits(num) {
  if (Math.floor(num / 10) === 0) return 1;
  return countDigits(Math.floor(num / 10)) + 1;
}

console.log(countDigits(12345) === 5);
console.log(countDigits(7) === 1);
console.log(countDigits(100000) === 6);
console.log(countDigits(99999) === 5);
console.log(countDigits(0) === 1);

// All test cases should log true.