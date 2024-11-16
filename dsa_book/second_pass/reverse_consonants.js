/* 

9:45 // 10:11
- Would've finished much earlier, but I had a dumb debug issue
    - The `if` branch kept being followed. This was because I had `start` as an argument rather than `array[start]`. Silly me.

PROBLEM
I: A string
O: A string, reversed from the input

RULES
- If the character is less than 2 length, return the string
- If character is a vowel, leave it alone
- Case should be retained

EXAMPLE
"Consonants"
 sotnonasnC

DATA STRUCTURE
- Convert to array
- Use start/end
    - Check if a value is a consonant
        - Once both are, swap
        - Break once start/end equal each other

"Consonants"
[s o t n o n a s n C]
         s   e

- if s not a consonant
    - Move to right
- if e not a consonant
    - Move to left
- Otherwise
    - Swap
    - Move both inward

ALGORITHM
1. Setup
    - Initialize start to 0
    - Initialize end to string length - 1
2. Convert string to an array
3. Swap characters using start/end
    - Loop through array (while start < end)
        - If start is not consonant HELPER
            - Increment start
        - If end is not consonant HELPER
            - Decrement end
        - Otherwise
            - Swap the elements
            - Increment
4. Rejoin and return string

HELPERS
isNotConsonant
- Match for anything except vowels and all letters
- Negate this
*/

function reverseConsonants(string) {
  let start = 0;
  let end = string.length - 1;
  const array = [...string];

  while (start < end) {
    if (isNotConsonant(array[start])) {
      start++;
    } else if (isNotConsonant(array[end])) {
      end--;
    } else {
      [array[start], array[end]] = [array[end], array[start]];
      start++;
      end--;
    }
  }
  
  return array.join('');
}

const isNotConsonant = char => !(/[a-z]/i.test(char) && /[^aeiou]/i.test(char));

// console.log(isNotConsonant('A'));

console.log(reverseConsonants("") === "");
console.log(reverseConsonants("s") === "s");
console.log(reverseConsonants("HELLO") === "LELHO");
console.log(reverseConsonants("leetcode") === "deectole");
console.log(reverseConsonants("example") === "elapmxe");
console.log(reverseConsonants("Consonants") === "sotnonasnC");

// All test cases should log true