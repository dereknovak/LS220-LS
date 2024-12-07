/* 

10:30 // 11:21
- Small debug after coding
    - Ran into a problem where a specific orderVolume was larger than the truckCapacity, which made the trip impossible
        - Landed on using a guard clause within `for..of` loop that immediately returned `false` if this occurred.
- After submitting the fixed solution, did not have to dubug any additional test cases
- Have already solve this problem before, but took time to think through additional ways to solve it
- Having a nested function makes it challenging to test. Might not be worth it in the assessment

PROBLEM
I: An array of positive integers, representing the volumes of orders
I: A number, representing the maximum number of trips that can be made
O: A number, representing the minimum truck capacity (volumes) that is required

RULES
- Deliver orders in sequence that they appear
- maxTrips will be a positive integer
    - No need to worry about negatives
    - Don't worry about 0
- On each trip, truck load must not exceed capacity
    - Can equal capacity
- Order volumes will be > 0
- Can have duplicate order volumes

EXAMPLE
// Input: orderVolumes = [6, 3, 8, 2, 5, 4, 5], maxTrips = 3
// Output: 14

trip1 = [6, 3] => 9
trip2 = [8, 2] => 10
trip3 = [5, 4, 5] => 14

DATA STRUCTURE
- Use array
- Binary search on the truck volume
    - Make groups that sum up to that volume
    - Count the number of groups at the end
        - If it is <= maxTrips, set as new truckVolume and search for a smaller volume
        - If not, search for a larger number
- Use 1 variable for sum
    - Once sum is exceeded, increment count and reset sum to current number
- After making it through the array, increment 1 last time

APPLICATION
// Input: orderVolumes = [6, 3, 8, 2, 5, 4, 5], maxTrips = 3
sum = 33
volumes = 1(15)...33(23)
            l      r
mid = 14
[6, 3, 8, 2, 5, 4, 5]
                     n
currentSum = 14
count = 3

mid = 24
[6, 3, 8, 2, 5, 4, 5]

[10, 20, 30, 40, 50] // maxTrips = 5
sum = 150
1..150
75
[10, 20, 30, 40, 50] => true
37
[10, 20, 30, 40, 50] => 


ALGORITHM
1. Find the sum of all nums in array
2. Using the sum, perform a binary search on the truckVolumes to find minimum volume size
    a. Setup
        - Initialize left to 1
        - Initialize right to sum
        - Initialize truckVolume to sum
    b. Perform binary search (left <= right)
        - If validVolume HELPER
            - Reassign minVolume to current
            - Eliminate right volumes
        - Otherwise
            - Eliminate left volumes
3. Return the minimum size

HELPERS
validVolume(truckVolume, orderVolumes, maxTrips)
1. Setup
    - Initialize count to 1
    - Initialize sum to 0
2. Count numbers of groups that do not exceed truckVolume
    - Use for loop (i = 0)
        - Add orderVolumes at i to sum
        - If sum > truckVolume
            - Increment count
            - Reset sum to orderVolumes at i
3. Return whether count <= maxTrips
*/

function findTruckCapacity(orderVolumes, maxTrips) {
  function isValidCapacity(truckCapacity) {
    let count = 1;
    let sum = 0;

    for (let order of orderVolumes) {
      if (order > truckCapacity) return false;

      sum += order;

      if (sum > truckCapacity) {
        count++;
        sum = order;
      }
    }

    return count <= maxTrips;
  }

  let left = 1;
  let right = orderVolumes.reduce((a, b) => a + b);;
  let minCapacity = right;

  while (left <= right) {
    const truckCapacity = Math.floor((left + right) / 2);

    if (isValidCapacity(truckCapacity)) {
      minCapacity = truckCapacity;
      right = truckCapacity - 1;
    } else {
      left = truckCapacity + 1;
    }
  }

  return minCapacity;
}

// TEST CASES

// Example test cases
console.log(findTruckCapacity([6, 3, 8, 2, 5, 4, 7], 3) === 15);
console.log(findTruckCapacity([6, 3, 8, 2, 5, 4, 5], 3) === 14);
console.log(findTruckCapacity([3, 2, 5, 8, 4], 3) === 10);
console.log(findTruckCapacity([1, 2, 3, 4, 5], 1) === 15);
console.log(findTruckCapacity([10, 20, 30, 40, 50], 5) === 50);
console.log(findTruckCapacity([5, 5, 5, 5, 5], 2) === 15);
console.log(findTruckCapacity([7, 3, 9, 4, 2, 8, 6], 2) === 20);
console.log(findTruckCapacity([100], 1) === 100);

// // Duplicates
console.log(findTruckCapacity([1, 1, 1, 1, 1], 3) === 2);

// Additional Test Cases
console.log(findTruckCapacity([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 3) === 4);
console.log(findTruckCapacity([10, 20, 30, 40, 50], 2) === 90);
console.log(findTruckCapacity([50, 40, 30, 20, 10], 3) === 60);
console.log(findTruckCapacity([5, 10, 15, 20, 25], 1) === 75);
console.log(findTruckCapacity([3, 2, 4, 1, 5], 10) === 5);
console.log(findTruckCapacity([1000, 1000, 1000, 1000], 3) === 2000);