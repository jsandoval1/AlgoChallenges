/* 
  Given an array of integers
  return the index where the smallest integer is located

  return -1 if there is no smallest integer (array is empty) 
  since -1 is not a valid index, this indicates it couldn't be found

  If the smallest integer occurs more than once, return the index of the first one.
*/

var nums1 = [5, 2, 3];
var expected1 = 1;

var nums2 = [5, 4, 2, 2, 3];
var expected2 = 2;

var nums3 = [];
var expected3 = -1;

function indexOfMinVal(nums) {
    var minValue = nums[0];
    var minIndex = 0;

    if(!nums.length) return -1;

    for (i = 0; i < nums.length; i++) {
        if (nums[i] < minValue) {
            minValue = nums[i];
            minIndex = i;
        }
    }
    return minIndex;
}

console.log(indexOfMinVal(nums3));