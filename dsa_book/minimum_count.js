/* 

10:40 // 11:06

PROBLEM
I: An array of positive and negative integers
O: A number, representing the minimum count of either positive or negative

RULES
- 0 is neither positive or negative
- Find the count of both positive and negative numbers
    - Return the lowest count
- If no numbers, return 0
- Numbers are sorted

DATA STRUCTURE
- Use 2 binary searches
    - 1st to find range of negative numbers
    - 2nd to find range of positive numbers

[-4, -3, -2, -1, 3, 4]
             l    m  
negativeEnd =
positiveEnd = 4
negativeCount = 3 + 1 = 4
positiveCount   

ALGORITHM
1. Use binary search to find the negativeEnd
2. Use binary search to find the positiveEnd
3. Return the smallest value between negativeEnd/positiveEnd
*/

function minimumCount(nums) {
  const negatives = negativeCount(nums);
  const positives = positiveCount(nums);

  return Math.min(negatives, positives);
}

function negativeCount(nums) {
  let left = 0;
  let right = nums.length - 1;
  let negativeEnd = -1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] < 0) {
      negativeEnd = mid;
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return negativeEnd + 1;  
}

function positiveCount(nums) {
  let left = 0;
  let right = nums.length - 1;
  let positiveEnd = nums.length;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] > 0) {
      positiveEnd = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return nums.length - positiveEnd;
}

console.log(minimumCount([-4, -3, -2, -1, 3, 4]) === 2);
console.log(minimumCount([-3, 1, 2, 3, 4, 5]) === 1);
console.log(minimumCount([-5, -4, -3, -2, -1]) === 0);
console.log(minimumCount([1, 2, 3, 4, 5]) === 0);
console.log(minimumCount([-2, -1, 1, 2]) === 2);
console.log(minimumCount([-7, -5, -4, 1, 2, 6, 10]) === 3);
console.log(minimumCount([-3, -2, -1, 0, 5, 6]) === 2);
console.log(minimumCount([-1, 0, 1]) === 1);
console.log(minimumCount([]) === 0);