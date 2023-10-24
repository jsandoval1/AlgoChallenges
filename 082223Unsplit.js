/* 
  Given an array, remove and
  return the value at the beginning of the array and then shift the remaining items down to fill the empty space.

  Do this without using any built-in array methods except pop().
*/

var arr1 = [1, 2, 3];
var expected1 = 1;
// after running function arr1 should now be:
var expectedArr1 = [2, 3];

var arr2 = ["a", "b", "c", "d"];
var expected2 = "a";
// after running function arr2 should now be:
var expectedArr2 = ["b", "c", "d"];

var arr3 = [];
var expected3 = undefined;
var expectedArr3 = [];

/**
 * Shifts every item of the array to the left by 1 so that the first item is
 * removed and returned.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<any>} items An array of any kind of items.
 * @returns {any} The removed value previously at idx 0.
 */
function shift(items) {
    // this variable below is created to store the first item of the array to be returned later in the function
    const removedItem = items[0];

    // this for loop shifts all the remaining items (after we took out the first item above) and shifts to the left
    for (var i = 0; i < items.length; i++) {
        items[i] = items[i + 1];
    }
    // we use pop to remove the last item in the array (this is because it is duplicated at the end)
    items.pop();
    // then we return the removed value
    return removedItem;
}

// This fucntion can also be written without pop() - we can change the for loop to for(var i = 0; i < items.length; i++) { items[i] = items[ i + 1];}

// For the shift() function, we store the first item, shift the remaining items to the left, and then remove the last item using pop(). The removed value is returned, or undefined is returned for an empty array.

console.log(shift(arr1));
console.log(arr1);
console.log(shift(arr2));
console.log(arr2);
console.log(shift(arr3));
console.log(arr3);
