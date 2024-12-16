/* 

8:03 // 8:10

PROBLEM
I: An array of numbers
O: A number, representing the sum of all numbers in array

RULES
- Use recursion
- Can have negative numbers
- If empty, return 0

RECURSION
Base Case:
- If array is empty, return 0
Recursive Definition
- The sum of the elements in an array is the sum of the last element and the total sum of the remaining ones.

[1, 2, 3]
[1, 2] + 3
[1] + 2
[] + 1
0

*/

function sum(nums) {
  if (!nums.length) return 0;
  return nums.pop() + sum(nums);
}

console.log(sum([1, 2, 3]) === 6);
console.log(sum([10, 15, 20, 10, 5]) === 60);
console.log(sum([-5, -1, 5, 2, -3]) === -2);
console.log(sum([7]) === 7);
console.log(sum([]) === 0);

// All test cases should log true.