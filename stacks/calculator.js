/*

- Solved over a couple of days
- Hot mess express
- Eventually just skipped over algorithm and went to coding bc I was done with this problem
- Had to read much of the walkthrough

PROBLEM
I: A string of numbers and operations
O: A number, representing the total after evaluating the string

RULES
- Follow PEMDAS
- Numbers can have multiple digits
- Ignore spaces
- Floor division result

EXAMPLE
"5 + 3 * 2 - 8 / 4"
 5 + 6 - 2
     9

"10+5/4-3*2+2"
 10+1-6+2
  11 - 4
     7

DATA STRUCTURE
- Use a stack for numbers
- Use a stack for operations
- Build number in a string, then convert to int

"10+5/4-3*2+2+"
numbers = [10, 1
lastOperation = '-'
num = 3

- Push number to stack and reset when +/- found
    - If +, push num
    - If -, push neg num
- On first pass, push operations to stack and prioritize multiplicative operations
    - First push number to stack, then analyze second
    - Pop the first number
    - If *, multiply current number by last number in stack
    - If /, divide current number by last number in staack

ALGORITHM
1. Convert numbers/operations to numbers to be summed
    - Initialize numbers to []
    - Initialize lastOperation = ''
    - Initialize num to ''

    - Iterate through each char of expression (forEach, char)
        - 
2. Sum and return the numbers
*/

function calculator(expression) {
  function performOperation(operation) {
    let firstNum;
    let secondNum;

    switch (operation) {
      case '+':
        return +num;
      case '-':
        return -(+num);
      case '*':
        firstNum = numbers.pop();
        secondNum = +num;
        return firstNum * secondNum;
      case '/':
        firstNum = numbers.pop();
        secondNum = +num;
        return Math.floor(firstNum / secondNum);
    }
  }
  const numbers = [];
  let lastOperation = '+';
  let num = '';
  expression += '+';

  for (let char of expression) {
    if (/[\+\-\*\/]/.test(char)) {
      let result = performOperation(lastOperation);
      numbers.push(result);

      lastOperation = char;
      num = '';
    } else if (/ /.test(char)) {
      continue;
    } else {
      num += char;
    }
  }

  return numbers.reduce((a, b) => a + b);
}

console.log(calculator("6 - 2") === 4);
console.log(calculator(" 8 / 3") === 2);
console.log(calculator("2+3*4") === 14);
console.log(calculator("10 - 2 * 3 + 4 ") === 8);
console.log(calculator(" 20 / 4 * 2 + 7") === 17);
console.log(calculator("5 + 3 * 2 - 8 / 4") === 9);
console.log(calculator("10+5/4-  3*2+2") === 7);
console.log(calculator(" 30 / 3 * 2 - 4 * 2 / 4 + 1 ") === 19);
console.log(calculator("100 - 20 * 3 / 2 + 5 * 4 - 10 / 2 * 3") === 75);
// All test cases should log true.
