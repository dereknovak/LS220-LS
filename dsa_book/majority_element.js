/* 

PROBELM
I: An array of numbers
O: A number, representing the majority element

- Majority Element
    - Has the highest count of occurrences

EXAMPLE
[1, 2, 3, 1, 4, 4, 1, 1]
1: 4
2: 1
3: 1
4: 2

DATA
- Map object
    - Store the number as a key
    - Count iterations

ALGORITHM
1. Tally the number counts
    - Use getTally HELPER
2. Return the count that has the most occurrences
    - Get keys of tally (uniqueNums)
    - Sort by their count (b - a)
    - Return the first element of uniqueNums

HELPERS
getTally(numbers)
- Initialize tally to {}
- Iterate through numbers
    - If tally has the number
        - Increment its count
    - Otherwise
        - Set the number to 1
- Return the tally
*/

function findMajority(numbers) {
  const tally = getTally(numbers);
  return Object.keys(tally)
               .map(Number)
               .sort((a, b) => tally[b] - tally[a])[0];
}

function getTally(numbers) {
  const tally = {}
  numbers.forEach(num => {
    if (tally[num]) {
      tally[num] += 1;
    } else {
      tally[num] = 1;
    }
  });

  return tally;
}

// Optimized
function findMajority(numbers) {
  const counts = new Map();
  const majorityCount = Math.ceil(numbers.length / 2);

  for (let num of numbers) {
    if (counts.has(num)) {
      counts.set(num, counts.get(num) + 1);
    } else {
      counts.set(num, 1);
    }

    if (counts.get(num) >= majorityCount) return num;
  }
}

console.log(findMajority([6, 4, 4, 6, 4]) === 4);
console.log(findMajority([4, 5, 2, 5, 5, 5, 1]) === 5);
console.log(findMajority([1, 2, 1, 2, 2, 1, 2]) === 2);
console.log(findMajority([1, 2, 3, 1, 4, 4, 1, 1]) === 1);
console.log(findMajority([5, 5, 5]) === 5);