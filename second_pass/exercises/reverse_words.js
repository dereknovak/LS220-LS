/* 

9:40 // 9:59
- Got tripped up with split/joins. Easy fixes
- Solution is identical to provided one

PROBLEM
I: A string with multiple words
O: The same string, but with each word reversed

RULES
- Cannot use `reverse` method
- Order of words should not be altered
- Case should be maintained
- Will always receive a string as an argument
- If empty, return empty
- If special chars, follow same rules

EXAMPLE
"Hello World"
=> "olleH dlroW"

DATA STRUCTURE
- An array for words
    - Transform the words to reverse
- An array for each character
    - Two pointer approach (start/end)
        - Switch chars until the pointers meet (while start < end)

"Hello World"
['Hello', 'World']
[ o l l e H ]
      se

ALGORITHM
1. Convert string to an array of words
2. Transform each word into its reversed version
    - Iterate through words (map)
        - Use reverseWord HELPER
3. Return transformed words, rejoined with a space

HELPERS
reverseWord(word)
1. Setup
    - Initialize start to 0
    - Initialize end to word length - 1
    - Convert word to an array of characters
2. Iterate through word, reversing it using start/end pointers
    - Loop through characters (while start < end)
        - Swap characters at start and end
        - Increment start
        - Decrement end
3. Rejoin and return reversed word
*/

function reverseWords(sentence) {
  return sentence.split(' ')
                 .map(reverseWord)
                 .join(' ');
}

function reverseWord(word) {
  let start = 0;
  let end = word.length - 1;
  const chars = [...word];

  while (start < end) {
    [chars[start], chars[end]] = [chars[end], chars[start]];
    start++;
    end--;
  }

  return chars.join('');
}

// TEST CASES

// Happy Path
console.log(reverseWords("Hello World") === "olleH dlroW");
console.log(reverseWords("Launch School is Fun") === "hcnuaL loohcS si nuF");

// One Word
console.log(reverseWords("World") === "dlroW");

// Empty
console.log(reverseWords("") === "");

// Special Chars and Numbers
console.log(reverseWords("Hell0 Wor1d") === "0lleH d1roW");

// Additional Test Cases
console.log(reverseWords("JavaScript is fun") === "tpircSavaJ si nuf");
console.log(reverseWords("Coding in the sun") === "gnidoC ni eht nus");
