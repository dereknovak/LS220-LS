/* 

Base Case:
    - If iteration is < 3, return 1
Recursive Definition
    - A fibonacci number is the sum of the number before it and 2 numbers before it
*/


function fibonacci(n) {
  const cache = new Map();

  function recursion(n) {
    if (n < 3) return 1;
    if (cache.has(n)) return cache.get(n);

    let value = recursion(n - 1) + recursion(n - 2);
    cache.set(n, value);

    return value;
  }
  return recursion(n);
}


console.log(fibonacci(1) === 1);
console.log(fibonacci(2) === 1);
console.log(fibonacci(3) === 2);
console.log(fibonacci(4) === 3);
console.log(fibonacci(5) === 5);
console.log(fibonacci(12) === 144);
console.log(fibonacci(20) === 6765);

// All test cases should log true.