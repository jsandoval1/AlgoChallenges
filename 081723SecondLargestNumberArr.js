
/* 
Array: Second-Largest

Return the second-largest element of an array, or null if there is none.

Bonus: do it with one loop and no nested loops
*/

// 2nd largest is 2nd
var nums1 = [2, 3, 1, 4];
var expected1 = 3;

// largest is first
var nums2 = [4, 1, 3, 2];
var expected2 = 3;

// largest duplicated first
var nums3 = [4, 4, 4, 1, 3, 2];
var expected3 = 3;

// 2nd largest is first
var nums4 = [3, 1, 4, 2];
var expected4 = 3;

// largest is 2nd
var nums5 = [3, 4, 2, 1];
var expected5 = 3;

var nums6 = [3, 3];
var expected6 = null;

var nums7 = [2];
var expected7 = null;

var nums8 = [];
var expected8 = null;

/**
 * Finds the second largest int from the given array and returns it or null.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums
 * @returns {?number} The second largest int from the given array or null.
 *    The ? in front means it's nullable.
 */
function secondLargest(nums) {

    var largest = nums[0];
    var secondLargest = null;

    if (nums.length < 3) return null;

    else {
        for (i = 0; i < nums.length; i++) {
            switch (true) {
                case (nums[i] == largest || nums[i] == secondLargest): {
                    break;
                }
                case (nums[i] > largest && nums[i] > secondLargest): {
                    largest = nums[i];
                    break;
                }
                case (nums[i] < largest && nums[i] >= secondLargest): {
                    secondLargest = nums[i];
                    break;
                }
                default: break;
            }
        }
    }
    return secondLargest;
}