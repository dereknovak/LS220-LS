/* 

10:52 // 11:09
- Very smooth
- No hints
- Slightly cleaner than provided solution

PROBLEM
I: A string of brackets
O: A boolean, representing whether the string has a valid set of brackets

RULES
- Each opening should have a corresponding closing bracket
- A closing bracket should not appear before an opening bracket
- Brackets must be properly nested
    - [{}] => valid
    - [{]} => invalid
- Can receive an empty string as an argument
    - Return true
- Just brackets in string

DATA STRUCTURE
- A stack
    - Everything needs a pair
    - Nesting needs to be correct
- An object
    - Keeps track of matches
        - K: [
        - V: ]

'([{}])'
stack = &&

'[{]}'
stack = &[{&

APPLICATION
'[]}{()'
stack = &}&
brackets = { [: ], {: }, (: ) }

ALGORITHM
1. Validate brackets using a stack
    - Initialize stack to []
    - Initialize brackets to {}
    - Iterate through string of brackets
        - If a key of brackets
            - Add to stack
        - Otherwise
            - Remove the last element of stack
            - If last element of stack's value in `brackets` is not current character
                - Return false
2. If stack is empty, return true
*/

function areMatched(string) {
  const stack = [];
  const brackets = { '{': '}', '[': ']', '(': ')' };

  for (let char of string) {
    if (Object.keys(brackets).includes(char)) {
      stack.push(char);
    } else {
      if (brackets[stack.pop()] !== char) return false;
    }
  }

  return !stack.length;
}

// TEST CASES

// Happy Path
console.log(areMatched('[]{}()') === true);
console.log(areMatched('([{}])') === true);
console.log(areMatched('()[{}]') === true);

// Closing First
console.log(areMatched('[]}{()') === false);
console.log(areMatched(']{}()[') === false);

// Empty
console.log(areMatched('') === true);

// Invalid
console.log(areMatched('[{]}') === false);
console.log(areMatched(']') === false);

// No Closing
console.log(areMatched('[]{}(') === false);