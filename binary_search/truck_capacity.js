/* 

10:52 // 12:10 (incomplete... 3 failed test cases. Ran out of time and had to go to work)
- Debugged after work. Took about 10 mins.

PROBLEM
I: An array of numbers, representing orders represented by volume of the order
I: A number, representing the maximum amount of trips that can be taken
O: A number, representing the minimum truck size needed to transport the orders

RULES
- Orders must be taken in order of array
- Find the mimimum capacity needed for amount of trips
- Array lengths may be different
- Max trips does not have to be reached

EXAMPLE
[3, 2, 5, 8, 4], 3
[3, 2, 5] => 10
[8, 4] => 12

[7, 3, 9, 4, 2, 8, 6] // trips = 2
trip1 = [7, 3, 9] => 19
trip2 = [4, 2, 8, 6] => 20

[10, 20, 30, 40, 50] // 2
[10, 20, 30] => 60
[40, 50] => 90

DATA STRUCTURE
- Use array
- Binary Search

[7, 3, 9, 4, 2, 8, 6] // 2
totalSum = 39
[1, 2, 3... 39]
 l           r
left = 1
right = 39
mid = 20

[7, 3, 9, 4, 2, 8, 6] // capacity = 20
          a         r
tripCount = 2
 20
- start with tripCount as 1, increment at the start of each new trip
- increment runner while sum <= 20
- after a trip is made, sum should be the current anchor
    - Anchor moves up to runner
    - Increment runner
    - Sum is anchor
    - Break if totalTrips > maxTrips
- Return if trip is <= maxTrips
- If trip count is less than or equal to target
    - Move right
- If trip count is more than target
    - Move left

[3, 2, 5, 8, 4] maxTrips = 3
sum = 22
left = 6
right = 10
mid = 8

[3, 2, 5, 8, 4] // 11 => 5 => 8 => 9 => 10

sum = 
totalTrips = 

[100] // maxTrips = 1
left = 1
right = 100
mid = 50

ALGORITHM
1. Determine the sum of the numbers
2. Perform a binary search on sums (1...sum), searching for the min capacity
    - Initialize left to 1
    - Initialize right to sum
    - Initialize minCapacity to 0;

    - Loop through capacities (while left <= right)
        - Initialize mid to left + right / 2 (floor)
        - Determine if mid is a valid capacity (isValidCapacity HELPER)
        - If true
            - minCapacity is reassigned to miniumum of current and mid
            - left is reassigned to mid + 1
        - Otherwise
            - right is reassined to mid - 1
3. Return the minCapacity

HELPERS
isValidCapacity(orderVolumes, capacity(mid), maxTrips)
- Initialize anchor to 0
- Initialize runner to 1
- Initialize totalTrips to 1
- Initialize sum to orderVolumes @ anchor

- Loop through orderVolumes (while runner < orderVolumes length)
    - Add runner to sum
    - If sum > capacity
        - anchor is assigned to runner
        - sum is reassigned to orderVolumes @ anchor
        - Increment totalTrips
    - Increment runner
    - If totalTrips > maxTrips, return false

- Return true

*** REFACTOR ***
[3, 2, 5, 8, 4] / 11
          ar

- sum starts at 0
- When sum is reached
    - Increment totalTrips
    - If totalTrips > maxTrips
        - Return false
    - move anchor to runner
    - Reset sum
- Increment totalTrips 1 more time afterwards

sum = 18
*/

function findTruckCapacity(orderVolumes, maxTrips) {
  function isValidCapacity(capacity) {
    let anchor = 0;
    let runner = 0;
    let totalTrips = 0;
    let sum = 0;

    while (runner < orderVolumes.length) {
      sum += orderVolumes[runner];

      if (sum > capacity) {
        anchor = runner + 1;
        sum = 0;
        totalTrips++;
        if (totalTrips > maxTrips) return false;
      } else {
        runner++;
      }

    }

    return totalTrips + 1 <= maxTrips;
  }

  const sum = orderVolumes.reduce((a, b) => a + b);
  let left = 1;
  let right = sum;
  let minCapacity = 0;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (isValidCapacity(mid)) {
      minCapacity = Math.min(mid);
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  
  return minCapacity;
}

console.log(findTruckCapacity([6, 3, 8, 2, 5, 4, 7], 3) === 15);
console.log(findTruckCapacity([3, 2, 5, 8, 4], 3) === 10);
console.log(findTruckCapacity([1, 2, 3, 4, 5], 1) === 15);
console.log(findTruckCapacity([10, 20, 30, 40, 50], 5) === 50);
console.log(findTruckCapacity([5, 5, 5, 5, 5], 2) === 15);
console.log(findTruckCapacity([7, 3, 9, 4, 2, 8, 6], 2) === 20);
console.log(findTruckCapacity([100], 1) === 100);
console.log(findTruckCapacity([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 3) === 4);
console.log(findTruckCapacity([10, 20, 30, 40, 50], 2) === 90);
console.log(findTruckCapacity([50, 40, 30, 20, 10], 3) === 60);
console.log(findTruckCapacity([5, 10, 15, 20, 25], 1) === 75);
console.log(findTruckCapacity([3, 2, 4, 1, 5], 10) === 5);
console.log(findTruckCapacity([1000, 1000, 1000, 1000], 3) === 2000);