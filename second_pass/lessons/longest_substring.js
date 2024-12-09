/* 

11:08 // 11:45
- Added additional rules
    - Could have whitespace and capital letters
- Had to debug a bit at the end
    - Forgot to reassign maxLength 1 more time at end of iteration
    - Debugging took about 2 minutes
- Considered recursion, but this wouldn't work
- My solution is not as efficient as provided one
    - They used Map to store the index of the characters, then would reassign anchor to the value after it once a duplicate was found

PROBLEM
I: A string
O: A number, representing the length of the longest substring w/out repeating chars

RULES
- Case insenstive
    - Lowercase everything beforehand
- If empty, return 0
- If 1, return 1
- May contain whitespace
    - Ignore whitespace
- Otherwise, only letters

EXAMPLE
aa => 1 (a)
abba => 2 (ab or ba)
helloworld => 5 (world)

DATA STRUCTURE
- Use string
- Anchor/Runner
    - A/R start at 0
    - Once a duplicate is found
        - Determine length
            - runner - anchor
        - reassign maxLength to max of length and maxLength
    - Increment anchor
    - Reassign runner to anchor
    - Restart set
- Set
    - Keep track of used values
- Do one more check before return

"h e l l o w o r l d"
           a         r

maxLength = 3

APPLICATION
l a u n c h s c h o o l
            a     r
maxLength = 7

ALGORITHM
1. Setup
    - Initialize anchor/runner to 0
    - Initialize maxLength to 0
    - Initialize usedLetters to empty set
    - Reassign string to only letters, lowercased
2. Search for longest substring length using anchor/runner
    - Loop through string (while runner < string length)
        - If usedLetters has current value at runner
            - Initialize currLength to runner - anchor
            - Reassign maxLength to max between maxLength and currLength
            - Increment anchor
            - Reassign runner to anchor
            - Reassign usedLetters to empty set
        - Otherwise
            - Add current value at runner to usedLetters
            - Increment runner
3. Return the maxLength
*/

// Original Solution
function oldlongestSubstringLength(string) {
  let anchor = 0;
  let runner = 0;
  let maxLength = 0;
  let usedLetters = new Set();
  string = string.toLowerCase().replace(/[^a-z]/ig, '');

  while (runner < string.length) {
    if (usedLetters.has(string[runner])) {
      maxLength = Math.max(maxLength, runner - anchor);
      anchor++;
      runner = anchor;
      usedLetters = new Set();
    } else {
      usedLetters.add(string[runner]);
      runner++;
    }
  }
  
  maxLength = Math.max(maxLength, runner - anchor);
  return maxLength;
}

// Fixed Solution to use Map
function longestSubstringLength(string) {
  let anchor = 0;
  let runner = 0;
  let maxLength = 0;
  let usedLetters = new Map();
  string = string.toLowerCase().replace(/[^a-z]/ig, '');

  while (runner < string.length) {
    if (usedLetters.has(string[runner])) {
      maxLength = Math.max(maxLength, runner - anchor);
      anchor = usedLetters.get(string[runner]) + 1;
      runner = anchor;
      usedLetters = new Map();
    } else {
      usedLetters.set(string[runner], runner);
      runner++;
    }

  }
  
  maxLength = Math.max(maxLength, runner - anchor);
  return maxLength;
}

// TEST CASES

console.log(longestSubstringLength("a") === 1);
console.log(longestSubstringLength("aa") === 1);
console.log(longestSubstringLength("ab") === 2);
console.log(longestSubstringLength("abba") === 2);
console.log(longestSubstringLength("abc") === 3);
console.log(longestSubstringLength("helloworld") === 5);
console.log(longestSubstringLength("launchschool") === 7);

// Whitespace
console.log(longestSubstringLength("hello world") === 5);

// Uppercase
console.log(longestSubstringLength("hElLo WoRlD") === 5);

// Additional Test Cases
console.log(longestSubstringLength("dvdf") === 3);
console.log(longestSubstringLength("tmmzuxt") === 5);
console.log(longestSubstringLength("thisishowwedoit") === 6);
console.log(longestSubstringLength("longestsubstring") === 8);
console.log(longestSubstringLength("aabbccddeffghijklmno") === 10);
console.log(longestSubstringLength("abcdefghijklmnopqrstuvwxyz") === 26);