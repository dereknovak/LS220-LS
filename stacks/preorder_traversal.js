/* 

3:57 // 4:33
- Solved without any help
- Used an infinite loop rather than a while loop
    - Fixed after reading walkthrough

PROBLEM
I: The root of a binary tree
O: An array containing all node values from the tree

RULES
- Must use a stack
- Must traverse in preorder (NLR)

EXAMPLE
[1, 2, 3, null, null, 4, null, null, 5]
               1
             2    3
                4  
                  5
[1, 2, 3, 4, 5]

[5, 3, null, 2, null, 1, null]
      5
    3         
  2
1
[5, 3, 2, 1]

DATA STRUCTURE
- Binary tree (traverse preorder)
- Use a stack for values
    - Add value
    - Push node to stack
    - Go to left node
    - If no left node, pop the last element in stack and go to its right node
    - If no right node, pop the last element in stack
    - **While stack is not empty**
    - Repeat

      1
  2       3
        4   
          5
result = [1, 2
stack  = [n1, n2

APPLICATION
      1
  2       3
        4   
          5
result = [1, 2, 3, 4]
stack  = [n5
  node = n2

- Push right then left to stack unless null
- Break if stack is empty before popping from stack

result = [5, 3, 2, 1]
stack  = [n1, n3, n2, n1]
node = n1

ALGORITHM
1. Setup
    - Initialize result to []
    - Initialize stack to [root]
    - Initialize node to root
2. Preorder traverse
    - While stack length > 0
        - Push node value to result
        - Push right and left nodes to stack if they are not null
        - Pop node from stack
            - Reassign node to this element
3. Return the result array
*/

// Given the root node of a binary tree, implement a
// function `preorderTraversal`, that returns an
// array containing the values of the nodes visited in
// a preorder traversal.

// Your task is to implement the function iteratively using a stack.

function preorderTraversal(root) {
  const result = [];
  const stack = [root];
  let node = root;

  while (stack.length) {
    result.push(node.val);

    if (node.right) stack.push(node.right);
    if (node.left) stack.push(node.left);

    node = stack.pop();
  }

  return result;
}

class Node {
  constructor(value) {
    this.val = value;
    this.left = null;
    this.right = null;
  }
}

// Helper function for test cases
function buildTree(arr) {
  if (arr.length === 0) {
    return null;
  }

  const nodes = [];

  const val = arr.shift();
  const root = new Node(val);
  nodes.push(root);

  while (arr.length > 0) {
    const curr = nodes.shift();

    const leftVal = arr.shift();
    if (leftVal !== null) {
      curr.left = new Node(leftVal);
      nodes.push(curr.left);
    }

    if (arr.length > 0) {
      const rightVal = arr.shift();
      if (rightVal !== null) {
        curr.right = new Node(rightVal);
        nodes.push(curr.right);
      }
    }
  }

  return root;
}

// Test Cases:

const tree1 = buildTree([1, null, 2, 3]);
console.log(preorderTraversal(tree1)); // Output: [1, 2, 3]

const tree2 = buildTree([1, 2, 3, null, null, 4, null, null, 5]);
console.log(preorderTraversal(tree2)); // Output: [1, 2, 3, 4, 5]

const tree3 = buildTree([5, 3, null, 2, null, 1, null]);
console.log(preorderTraversal(tree3)); // Output: [5, 3, 2, 1]

const tree4 = buildTree([10, 5, 15, null, 6, 12, 21, null, null, 11]);
console.log(preorderTraversal(tree4)); // Output: [10, 5, 6, 15, 12, 11, 21]