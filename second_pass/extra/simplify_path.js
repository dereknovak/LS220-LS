/* 

8:41 // 9:16 // 9:21 (debug)
- Could not remember the `match` function and had to look it up... shame
- Passed all initial test cases
- After submitting to LeetCode, had to debug 2 problems
    - When .. exceeded the stack, this should not immediately return '/' but just skip
        - Simply misunderstood the rules
    - When the string was empty, the match method return `null`
        - Should've anticipated this
- Overall a fun problem

PROBLEM
I: A string, representing an absolute path for a Unix-style file system
O: A string, representing the simplified canonical path

RULES
- Simplified canonical path
- '.' => current directory
- '..' => previous directory
- '//' => assume as just one (multiple)
- Everything else is a directory/file
    - Including '...'
- Path must start with '/'
- Directories must be separated by a '/'
- Must not end with '/' unless it is the root directory
- Must not include '..' or '.' in final

EXAMPLE
"/home/user/Documents/../Pictures"
=> "/home/user/Pictures"
*** home
        user
            Documents
            Pictures

"/.../a/../b/c/../d/./"
    ...
        a
        b
            c
            d
=> "/.../b/d"

DATA STRUCTURE
- Use a stack
    - Use regex to split by 1 or more slashes
    - Use stack to get rid of unneccessary strings
        - If ..
            - Pop last element in stack
        - If .
            - Skip
    - Rejoin string with /, prepend one at beginning too

APPLICATION
"/.../a/../b/c/../d/./"
['...', 'a', '..', 'b', 'c', '..', 'd', '.']
   c                                   
stack = [... b d]

"/home/user/Documents/../Pictures"
[home user Documents .. Pictures]
  
stack = [home user Pictures]
=> '/home/user/Pictures'

ALGORITHM
1. Create an empty stack
2. Split the string into an array of directories/filenames
3. Iterate through array, pushing names to stack and removing as necessary
    - Iterate through array (for..of)
        - If current string is ..
            - If stack is empty, return '/'
            - Pop last element in stack
        - Otherwise
            - Push current element to stack
4. Rejoin array with simplified format
    - '/' plus joining stack with '/'

*/

function simplifyPath(path) {
  const stack = [];
  const keywords = path.match(/[^/]+/g) || [];

  for (let word of keywords) {
    if (word === '..') {
      if (!stack.length) continue;
      stack.pop();
    } else if (word === '.') {
      continue;
    } else {
      stack.push(word);
    }
  }

  return '/' + stack.join('/');
}

// TEST CASES

// Happy Path
console.log(simplifyPath('/home/') === '/home');

// Double period
console.log(simplifyPath('/home/foo/../bar') === '/home/bar');

// Single period
console.log(simplifyPath('/home/foo/.') === '/home/foo');

// Multiple Slash
console.log(simplifyPath('/home//foo///bar/') === '/home/foo/bar');

// Triple period
console.log(simplifyPath('/home/.../foo') === '/home/.../foo');

// LeetCode
console.log(simplifyPath("/home//foo/") === "/home/foo");
console.log(simplifyPath("/home/user/Documents/../Pictures") === "/home/user/Pictures");
console.log(simplifyPath("/../") === "/");
console.log(simplifyPath("/.../a/../b/c/../d/./") === "/.../b/d");

// Additional Test Cases after Submission
console.log(simplifyPath("/a/../../b/../c//.//") === "/c");
console.log(simplifyPath("") === "/");

