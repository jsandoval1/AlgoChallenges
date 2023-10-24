/* 
  Given an array, move the minimum value to the front in-place
  return the array after done.

  No built in methods.
*/

var nums1 = [6, 4, 5, 1, 3, 2];
var expected1 = [1, 6, 4, 5, 3, 2];

var nums2 = [1, 5, 2, 9];
var expected2 = [1, 5, 2, 9];

// The min occurs twice.
var nums3 = [5, 1, 0, 2, 3, 0];
var expected3 = [0, 5, 1, 2, 3, 0];

/**
 * Moves the smallest number in the given array to the front.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums
 * @returns {Array<number>} The given arr after the min has been moved to front.
 */
function minToFront(nums) {
    var count = 0;
    var min = nums[0];
    for(var i = 0; i < nums.length; i++){
        if (nums[i] < min){
            min = nums[i];
            count = i;
        }
    }
        console.log(min);
    for(var j = count; j >= 0; j--){
        nums[j] = nums[j-1];
    }
    nums[0] = min;
    return nums;
}

console.log(minToFront([]))