/* 
- Took me about 3 minutes to completely solve.
- I remembered most of it from the last time I solved it.

Base Case:
- String is 1 or 0 chars long

Recursive Definition:
- A string is reversed when the first character is appended on the end of the rest of the string reversed

*/

function reverseString(string) {
  if (string.length < 2) return string;
  return reverseString(string.slice(1)) + string[0];
}

console.log(reverseString("hello") === "olleh");
console.log(reverseString("world") === "dlrow");
console.log(reverseString("a") === "a");
console.log(reverseString("") === "");
console.log(reverseString("recursion") === "noisrucer");

// All test cases should log true.