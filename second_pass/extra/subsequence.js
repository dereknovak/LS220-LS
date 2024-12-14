/* 
Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).
*/

/* 

8:53 // 9:07
- Very easy

PROBLEM
I: A string
I: A string
O: A boolean, representing whether the first input (s) is a subsequence of second input (t)

RULES
- A subsequence
    - The characters exist within the other string in the same order
        - 'abc'
        - 'aebec'
           a b c

EXAMPLE
Input: s = "abc", t = "ahbgdc"
                       a b  c
=> true

Input: s = "axc", t = "ahbgdc"
                       a    c (no x)
=> false

DATA STRUCTURE
- 2 pointers (1 for each string)
    - If character from s is found in t
        - Increment s and t
    - Otherwise
        - Increment t
    - If t === t length
        - Return false

abc
   s
ahbgdc
     t
5 == 6 ?
=> true

ALGORITHM
1. Setup
    - Initialize s to 0
    - Initialize t to 0
2. Check if all letters in str1 are in str2
    - Loop through str1 and str2
        - If s === t
            - Increment s
        - Increment t (each iteration)
3. If all letters in str1 are found, return true
    - Return if s === str1 length

*/

function isSubsequence(str1, str2) {
  let s = 0;
  let t = 0;

  while (s < str1.length && t < str2.length) {
    if (str1[s] === str2[t]) s++;
    t++;
  }

  return s === str1.length;
}

// TEST CASES

console.log(isSubsequence('abc', 'ahbgdc') === true);
console.log(isSubsequence('axc', 'ahbgdc') === false);

// Empty
console.log(isSubsequence('', 'ahbgdc') === true);
console.log(isSubsequence('abc', '') === false);

// One letter
console.log(isSubsequence('a', 'ahbgdc') === true);
console.log(isSubsequence('x', 'ahbgdc') === false);