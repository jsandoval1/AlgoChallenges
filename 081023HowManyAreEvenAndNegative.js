/* 
Given an array of numbers,
return a count of how many are both even and negative.
*/

var nums1 = [1, 5, -1, 2, -4, 9, -10, 0, -3, -2];
var expected1 = 3;

var nums2 = [];
var expected2 = 0;

var nums3 = [-4, -2, -6];
var expected3 = 3;

/**
 * Counts how many numbers are both even and negative.
 * @param {number} nums
 * @returns {number} The count.
 */
function countEvenNegatives(nums) {
    var count=0
    for( var loopThroughNums = 0; loopThroughNums < nums.length; loopThroughNums++){
            if (Math.abs(nums[loopThroughNums]) %2 == 0 && nums[loopThroughNums]<0 ){
                count++;
            }
    }
    return count;
}
console.log(countEvenNegatives(nums3))