/* 

10:00 // 10:23

PROBLEM
I: A string
O: A boolean, representing whether the brackets match

RULES
- Each match must be complete

[{(})]

DATA STRUCTURE
- A stack
- An object for matches

}
{
[

ALGORITHM
1. Validate the input
    - Return '' if empty
2. Create a stack (empty array)
3. Loop through the characters until a mismatch is found
    - Use a for loop (length of string)
        - Initialize char to char at current index
        - If char includes { [ (
            - Push that char to the stack
            - Continue
        - Otherwise
            - Remove the top char front stack 
            - if char does not match its value
                - Return false
4. Return true if no mismatches

*/

function areMatched(string) {
  if (!string.length) return true;

  const stack = [];
  const matches = { '{': '}', '[': ']', '(': ')' };

  for (let i = 0; i < string.length; i++) {
    let char = string[i];

    if (Object.keys(matches).includes(char)) {
      stack.push(char);
    } else {
      if (matches[stack.pop()] !== char) return false;
    }
  }

  return stack.length === 0;
}

console.log(areMatched("()") === true);
console.log(areMatched("([()]{})") === true);
console.log(areMatched("([((}]({}))") === false);
console.log(areMatched("{{[[(())]]}}") === true);
console.log(areMatched("") === true);
console.log(areMatched("([)]") === false);