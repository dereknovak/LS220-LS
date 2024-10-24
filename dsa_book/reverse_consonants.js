/* 

PROBLEM
I: A string
O: A string, with consonants reversed

RULES
- Consonant
    - Any letter that is not a vowel
        - a e i o u
    - Case insensitive
- Reverse
    - Vowels should maintain their spot
    - Constants order should be reversed
- Brute force first
- Optimize second

EXAMPLE
"leetcode"
 *  ** *
"deectole"

DATA STRUCTURE (brute)
- An array for all of the consonants
    - Reverse the array
    - Iterate thru the string, replacing each consonant with the consonants from reverse

"Consonants"
con_index = 1 
consonants = [C n s n n t s] => [s t n n s n C]
letters = [s o t n o n a s n C]
"sotnonasnC"

DATA STRUCTURE (opt)
- Start/End pointers
    - Move end pointer down until a consonant is found
    - Once found, move start pointer until a consonant is found
        - Swap the consonants
        - If the pointer is the same, do nothing

"Consonants"
chars = [s o t n o n a s n C]
                 s   e

ALGORITHM (brute)
1. Validate the input
    - If string is empty, return an empty string
2. Capture all of the consonants from the input string
    - use getConsonants HELPER
3. Reverse the consonants array
    - Reverse consonants
4. Replace all consonants with each from the reversed consonants
    - Use replaceConsonants HELPER
5. Rejoin and return the new string
    - Return above

HELPER
isConsonant(char)
- Char matches all letters AND matches everything except vowels

getConsonants(string)
- Split string into chars
- Filter chars for isConsonant HELPER

replaceConsonants(chars, consonants)
- Initialize conIdx to 0
- Iterae through chars (map)
    - if current char isConsonant HELPER
        - return consonants at conIdx
        - Increment conIdx by 1
    - Return char
- Return the transformed array as a string rejoined

ALGORITHM (opt)
1. Validate the input
    - If string is empty, return an empty string
2. Split the string into an array of chars
3. Move through the array using start/end pointers, swapping consonants along the way
    - Initialize start to 0
    - Initialize end to chars length - 1
    - Use a while loop (while start does not equal end)
        - Use another while loop (while start does not equal end)
            - If element at end is a consonant
                - Break from loop
            - Decrement end by 1
        - Use another while loop (while start does not equal end)
            - If element at start is a consonant
                - Break from loop
            - Increment start by 1
        - Swap elements if both are consonant
4. Rejoin chars array and return string

"Consonants"
[s o t n o n a s n C]
start 5
end 5
startLetter = s
endLetter = n
*/

function reverseConsonants(string) {
  if (string.length < 2) return string;

  const chars = string.split('');
  let start = 0;
  let end = chars.length - 1;

  while (start <= end) {
    let startLetter;
    let endLetter;

    while (start !== end) {
      startLetter = chars[start];
      
      if (isConsonant(startLetter)) break;
      start += 1;
    }

    while (start !== end) {
      endLetter = chars[end];

      if (isConsonant(endLetter)) break;
      end -= 1;
    }

    if (isConsonant(startLetter) && isConsonant(endLetter)) {
      chars[start] = endLetter;
      chars[end] = startLetter;
    }
    
    start += 1;
    end -= 1;
  }

  return chars.join('');
}

function reverseConsonantsBrute(string) {
  if (!string.length) return '';

  const consonants = getConsonants(string).reverse();
  const chars = string.split('');

  return replaceConsonants(chars, consonants);
  console.log(consonants);
}

function replaceConsonants(chars, consonants) {
  let conIdx = 0;
  return chars.map(char => {
    if (isConsonant(char)) {
      let newChar = consonants[conIdx];
      conIdx += 1;

      return newChar;
    }

    return char;
  }).join('');
}

const getConsonants = string => string.split('').filter(isConsonant);
const isConsonant = char => /[a-z]/i.test(char) && /[^aeiou]/i.test(char);

console.log(reverseConsonants("") === "");
console.log(reverseConsonants("s") === "s");
console.log(reverseConsonants("HELLO") === "LELHO");
console.log(reverseConsonants("leetcode") === "deectole");
console.log(reverseConsonants("example") === "elapmxe");
console.log(reverseConsonants("Consonants") === "sotnonasnC");
