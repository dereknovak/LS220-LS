// Given an undirected graph represented by an edge list, determine if
// there is a path between specified source and destination vertices.

// Implement the function `hasPath` that takes three arguments:
// an edge list representing the graph, a source vertex, and a
// destination vertex. The function should return true if a path
// exists between the source and destination, and false otherwise.

/* 

11:12 // 11:44

PROBLEM
I: A 2D nested array, representing an edge list of an undirected graph
I: A number, representing a source vertex
I: A number, representing a destination vertex
O: A boolean, representing if a path from the source => destination is possible

RULES
- Undirected
    - Can go both ways
- Source
    - Where the iteration begins
- Destination
    - Where the interation (should) stop
    - If none is found, false is returned

EXAMPLE
[[1, 2], [2, 3], [3, 4]] // 1 // 4
adjList = {
  1: [2],
  2: [1, 3],
  3: [2, 4]
  4: [3]
}
returns true

[[1, 2], [3, 4]] // 1 // 4
adjList = {
  1: [2],
  2: [1],
  3: [4],
  4: [3],
}
returns false

DATA STRUCTURE
- A Map object
    - Showcase adjacencies
    - Use the number as a key
- Use a stack to hold verticies
- Use a Set object so we don't enter an infinite loop
    - Keep track of visited verticies

[[1, 2], [2, 3], [3, 4]] // 1 // 4
adjList = {
  1: [2],
  2: [1, 3],
  3: [2, 4]
  4: [3]
}
stack = [4]
visited = [1, 2, 3, 4]
return true

[[1, 2], [3, 4]] // 1 // 4
adjList = {
  1: [2],
  2: [1],
  3: [4],
  4: [3],
}
stack = []
visited = [1, 2]
return false

ALGORITHM
1. Create an adjList from the given edge list
    - Use get adjList HELPER
2. Loop through the adjList until a match is found or stack is empty
    - Use matchFound HELPER
3. If no match is found, return false

HELPERS
matchFound(adjList, source, destination)
- Initialize stack to [source]
- Initialize a visited Set to [source]
- Loop through adjList (while stack length > 0)
    - Initialize vertex to the last element of stack (removed)
    - If vertex is equal to destination
        - Return true
    - Otherwise
        - Determine the neighbors of vertex
        - Iterate through the neighbors
            - If a neighbor has not been visited
                - Add the neighbor to visited
                - Push the neighbor to the stack
- Return false

getAdjList(edgeList)
- Initialize adjList to empty Map object
- Iterate through the edge list
    - Initialize num1 to first element of subarr
    - Initialize num2 to second element of subarr
    - If adjList has num 1
        - Add num2 to current value
    - Otherwise
        - Create a property for num 1, pointing to num2
    - If adjList has num2
        - Add num1 to current value
    - Otherwise
        - Create a property for num2, pointing to num1
- Return adjList

matchFound(adjList, source, destination)
- Initialize stack to [source]
- Initialize a visited Set to [source]
- Loop through adjList (while stack length > 0)
    - Initialize vertex to the last element of stack (removed)
    - If vertex is equal to destination
        - Return true
    - Otherwise
        - Determine the neighbors of vertex
        - Iterate through the neighbors
            - If a neighbor has not been visited
                - Add the neighbor to visited
                - Push the neighbor to the stack
- Return false
*/

function hasPath(edgeList, src, dst) {
  const adjList = getAdjList(edgeList);
  return matchFound(adjList, src, dst);
}

function matchFound(adjList, src, dst) {
  const stack = [src];
  const visited = new Set([src]);

  while (stack.length > 0) {
    const vertex = stack.pop();

    if (vertex === dst) return true;
    const neighbors = adjList.get(vertex);

    for (let neighbor of neighbors) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        stack.push(neighbor);
      }
    }
  }

  return false;
}

function getAdjList(edgeList) {
  const adjList = new Map();
  
  edgeList.forEach(([num1, num2]) => {
    if (adjList.has(num1)) {
      adjList.get(num1).push(num2);
    } else {
      adjList.set(num1, [num2]);
    }

    if (adjList.has(num2)) {
      adjList.get(num2).push(num1);
    } else {
      adjList.set(num2, [num1]);
    }
  });

  return adjList;
}

console.log(hasPath([[1, 2], [2, 3], [3, 4]], 1, 4) === true);
console.log(hasPath([[1, 2], [3, 4]], 1, 4) === false);
console.log(hasPath([[1, 2], [1, 3], [2, 4], [3, 4], [3, 5], [5, 6]], 1, 6) === true);
console.log(hasPath([], 1, 1) === true);
console.log(hasPath([[1, 2], [1, 3], [4, 5], [6, 7]], 2, 5) === false);
console.log(hasPath([[1, 2], [2, 3], [3, 4], [4, 5], [1, 5], [2, 6], [6, 7], [7, 8], [8, 5]], 1, 8) === true);
console.log(hasPath([[1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 3], [2, 7], [7, 8], [8, 7], [7, 9], [9, 10], [10, 11], [11, 12], [12, 10], [7, 13]], 1, 13) === true);
console.log(hasPath([[1, 2], [2, 3], [3, 1], [4, 5], [5, 6], [6, 4], [7, 8], [8, 9], [9, 10], [10, 7], [11, 12], [13, 14], [14, 15], [15, 13]], 1, 12) === false);
// All test cases should log true
