/* 

4:25 // 5:27
(Debugged for 40 minutes. `previousIndex` would reference 0, which is a falsy value. This was causing the `if` branch never to execute on problems where a repeated character occurred on index 0)

PROBLEM
I: A string
O: A number, representing the longest substring of unique characters

RULES
- Longest substring without duplicates
    - If a character in substring is used more than once, the substring ends
- Only worry about lowercase letters

EXAMPLE
"helloworld"
hel
low
world

DATA STRUCTURE
- Set?

"h e l l o w o r l d"
           ar
map = [w: 5, o: 6, r: 7, l: 8, d: 9]
longestLength = 5
r - 1 - a
- Once match is found, set anchor to value after repeated char
    - Reset the map object

APPLICATION
"d v d f"
 a   r
map = [d: 0, v: 1 ]
longestLength = 2

ALGORITHM
1. Create an empty map object
2. Loop through string using a/r, determining the longest unique substring
    - Initialize anchor to 0;
    - Initialize runner to 0;
    - Initialize longestLength to 0;

    - Loop through string (while runner < string length)
        - If runner within the map object?
            - Reassign anchor to 1 more than non-unique value's index
            - Reset the map object
        - Otherwise
            - Add number to the map object
                - Key: Number
                - Value: Runner
            - Increment runner
            - Reassign the longest length to the max between current and runner - anchor
    
3. Return the longestLength
*/

function longestSubstringLength(string) {
  let uniqueChars = new Map();
  let anchor = 0;
  let runner = 0;
  let longestLength = 0;

  while (runner < string.length) {
    let previousIndex = uniqueChars.get(string[runner]);

    if (previousIndex !== undefined) {
      anchor = previousIndex + 1;
      uniqueChars = new Map();
    } else {
      uniqueChars.set(string[runner], runner);
      runner++;
      longestLength = Math.max(longestLength, runner - anchor);
    }

  }

  return longestLength;
}

console.log(longestSubstringLength("a") === 1);
console.log(longestSubstringLength("aa") === 1);
console.log(longestSubstringLength("ab") === 2);
console.log(longestSubstringLength("abba") === 2);
console.log(longestSubstringLength("abc") === 3);
console.log(longestSubstringLength("helloworld") === 5);
console.log(longestSubstringLength("dvdf") === 3);
console.log(longestSubstringLength("tmmzuxt") === 5);
console.log(longestSubstringLength("thisishowwedoit") === 6);
console.log(longestSubstringLength("longestsubstring") === 8);
console.log(longestSubstringLength("aabbccddeffghijklmno") === 10);
console.log(longestSubstringLength("abcdefghijklmnopqrstuvwxyz") === 26);