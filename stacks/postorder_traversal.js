/* 

10:41 // 11:48
- Had to look at first part of walkthrough and understand the purpose of 2 stacks

PROBLEM
I: The head of a binary tree
O: An array containing the values of tree in post-traversal order

RULES
- Use postorder traversal
    - LRN
- Must use a stack

EXAMPLE
const tree2 = buildTree([1, 2, 3, null, null, 4, null, null, 5]);
console.log(postorderTraversal(tree2)); // Output: [2, 5, 4, 3, 1]
            1
        2       3
              4
                5
[2, 5, 4, 3, 1]

DATA STRUCTURE
- A binary tree
- A stack
- Get to bottom of tree to left
- Work our way up to the top, going right when we can
- Work way back to the top again
    - Second while statement?
- Start with left sides

            1
        2       3
              4
                5
result = []
stack  = [1]


result = []
stack1 = []
stack2 = [1, 9, 2, 4, 8, 7, 3, 6, 5, 10, 11]
node = 11

result => [11, 10, 5, 6, 3, 7, 8, 4, 2, 9, 1]

ALGORITHM
1. Setup
    - Initialize stack1 to [root]
    - Initialize stack2 to []
2. Post order traversal
    - Loop through tree (while stack1 is not empty)
        - Pop last element from stack1
            - Assign to node
        - Push node to stack2
        - If node has a left child
            - Push to stack1
        - If node has a right child
            - Push to stack2
3. Return stack2 reversed
*/

function postorderTraversal(root) {
  const traversalStack = [root];
  const resultStack = [];

  while (traversalStack.length) {
    let node = traversalStack.pop();
    resultStack.push(node.val);

    if (node.left) traversalStack.push(node.left);
    if (node.right) traversalStack.push(node.right);
  }

  return resultStack.reverse();
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

// Test cases
const tree1 = buildTree([1, null, 2, 3]);
console.log(postorderTraversal(tree1)); // Output: [3, 2, 1]

const tree2 = buildTree([1, 2, 3, null, null, 4, null, null, 5]);
console.log(postorderTraversal(tree2)); // Output: [2, 5, 4, 3, 1]

const tree3 = buildTree([5, 3, null, 2, null, 1, null]);
console.log(postorderTraversal(tree3)); // Output: [1, 2, 3, 5]

const tree4 = buildTree([10, 5, 15, null, 6, 12, 21, null, null, 11]);
console.log(postorderTraversal(tree4)); // Output: [6, 5, 11, 12, 21, 15, 10]