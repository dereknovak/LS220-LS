/* 

11:35 // 11:55
- Very easy
- Didn't solve using exact stack rules (pop, peek, push), but I think that's fine

PROBLEM
I: An array of numbers and operations
O: A number, representing the score after all operations are complete

RULES
- Create a stack of scores (an array)
- Options
    - Integer
        - Add integer to current score
    - +
        - Add the sum of 2 most recent to score
    - *
        - Double the most recent score, and add to score
    - -
        - Remove the most recent score from the scoreboard
- If stack is empty, return 0

EXAMPLE
["7", "3", "-", "*", "+"]
[7, 14, 21] => 42

["8","-3","6","-","*","12","+","+"]
[8, -3, -6, 12, 6, 18] => 35

["4", "-"]
[] => 0

DATA STRUCTURE
- A stack (array)
    - Keep track of the last values of the stack and add to it
- The given array
    - Iterate through normally, executing each operation

ALGORITHM
1. Create the scoreboard stack
    - Initialize scoreboard to []
    - Iterate through the actions (forEach)
        - Switch Case
            - If +
                - slice scoreboard length - 2
                - Find sum of slice
                - Add sum to scoreboard
            - If *
                - append double the last value of scoreboard to scoreboard
            - If -
                - Pop the last value of scoreboard
            - Otherwise
                - Add the number version of string to scoreboard
2. Return the sum of the scoreboard
    - Reduce to the sum (use default of 0)
*/

function nexusSurge(actions) {
  const scoreboard = [];
  
  actions.forEach(action => {
    switch (action) {
      case '+':
        scoreboard.push(scoreboard.slice(scoreboard.length - 2).reduce(toSum));
        break;
      case '*':
        scoreboard.push(scoreboard[scoreboard.length - 1] * 2);
        break;
      case '-':
        scoreboard.pop();
        break;
      default:
        scoreboard.push(Number(action));
    }
  });

  return scoreboard.reduce(toSum, 0);
}

const toSum = (a, b) => a + b;

console.log(nexusSurge(["3", "4", "+"]) === 14);
console.log(nexusSurge(["5", "-", "-2"]) === -2);
console.log(nexusSurge(["1", "-", "-3", "*"]) === -9);
console.log(nexusSurge(["5", "-2", "+", "-", "7", "*"]) === 24);
console.log(nexusSurge(["-3", "-", "4", "8", "+", "*"]) === 48);
console.log(nexusSurge(["1", "-2", "3", "-", "+", "-"]) === -1);
console.log(nexusSurge(["-10", "*", "-", "5", "+", "7"]) === -3);
console.log(nexusSurge(["6", "-", "-8", "*", "2", "+"]) === -36);
console.log(nexusSurge(["1", "-", "2", "*", "+", "-10", "-", "*"]) === 24);
console.log(nexusSurge(["8","-3","6","-","*","12","+","+"]) === 35);