/* 

11:34 // 11:45
- Came up with base case and recursive defintion very quickly and without help
- Skipped Algorithm, but should probably do it next time
- Solution was exactly the same as provided one
- Added Case Insensitive test case afterwards

PROBLEM
I: A string
O: A boolean, representing whether the string is a palindrome

RULES
- Palindrome
    - Same letters forwards and backwards
- All characters will be lowercase
- No spaces
- Use recursion

DATA STRUCTURE
- Recursion
    - Base Case
        - String is 1 or 0 chars
    - Recursive Definition
        - A string is a palindrome if the first and last characters are the same, and the middle string is a palindrome

madam
ada
d => base case

*/

function isPalindrome(string) {
  if (string.length < 2) return true;

  string = string.toLowerCase();
  return (
    string[0] === string[string.length - 1] &&
    isPalindrome(string.slice(1, string.length - 1))
  );
}

// TEST CASES

// Happy Path
console.log(isPalindrome('madam') === true);
console.log(isPalindrome('dad') === true);
console.log(isPalindrome('racecar') === true);
console.log(isPalindrome('baddab') === true);

// Case Insensitive
console.log(isPalindrome('RaceCar') === true);

// False
console.log(isPalindrome('dog') === false);
console.log(isPalindrome('bdaabd') === false);
