/* 
In a magical kingdom, there’s a secret treasure map hidden in an enchanted scroll. The map is actually a list of landmarks arranged in a certain order, but the map has been rotated by a mischievous wizard to confuse treasure hunters.

Now, you're on a quest to find a specific landmark on this rotated map. You’ve been given the rotated map and a target landmark number. Your task is to figure out where the target landmark is located on the map.
*/

console.log(treasureLocation([4, 5, 6, 7, 0, 1, 2], 0) === 4);
console.log(treasureLocation([3, 4, 5, 1, 2], 3) === 0);

console.log(treasureLocation([1, 2, 3, 4, 5], 2) === 1);
console.log(treasureLocation([], 2) === -1);
console.log(treasureLocation([4, 5, 0, 1, 2], 2) === 4);
console.log(treasureLocation([2, 3, 4, 5, 6, 7, 8, 1], 8) === 6);
console.log(treasureLocation([1, 2, 3, -2, -1, 0], -2) === 3);
console.log(treasureLocation([3], 3) === 0);