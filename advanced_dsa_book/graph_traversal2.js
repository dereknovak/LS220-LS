// Implement a function `dfs` that accepts two arguments: an adjacency
// list representing an undirected graph, and a starting vertex (source).
// The function should print the vertices in preorder depth-first
// traversal order.

function dfs(adjList, source) {
  const visited = new Set([]);
  const stack = [source]

  while (stack.length > 0) {
    const vertex = stack.pop();
    console.log(vertex);
    visited.add(vertex);

    const neighbors = adjList.get(vertex).filter(vert => !visited.has(vert));
    stack.push(...neighbors);
  }
}

function bfs(adjList, source) {
  const visited = new Set([source]);
  const queue = [source]

  while (queue.length > 0) {
    const vertex = queue.shift();
    console.log(vertex);

    const neighbors = adjList.get(vertex).filter(vert => !visited.has(vert));
    neighbors.forEach(neighbor => {
      if (!visited.has(neighbor))
      queue.push(neighbor);
      visited.add(neighbor);
    });
  }
}

const adjList = new Map();
adjList.set(1, [2]);
adjList.set(2, [1, 3]);
adjList.set(3, [2]);

dfs(adjList, 1); // 1, 2, 3

const adjList2 = new Map();
adjList2.set(1, [2, 3]);
adjList2.set(2, [1, 4]);
adjList2.set(3, [1, 4, 5]);
adjList2.set(4, [2, 3]);
adjList2.set(5, [3, 6]);
adjList2.set(6, [5]);

bfs(adjList2, 1); // 1, 2, 3, 4, 5, 6 or 1, 3, 2, 5, 4, 6