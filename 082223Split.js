
// /* 
//   Given array and an additional value, insert this value at the beginning of
//   the array by making space for it at the beginning of the array.
//   return the new length of the array.

//   Do this without using any built-in array methods.

var arr1 = [1, 2, 3];
var newItem1 = 0;
var expected1 = 4;
// after function is called, arr1 should be:
var arr1Expected = [0, 1, 2, 3];

var arr2 = [];
var newItem2 = "a";
var expected2 = 1;
// after function is called, arr2 should be:
var arr2Expected = ["a"];

/**
 * Shifts all items to the right by one to make space to add the given new item
 * to the front of the given array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<any>} items An array of any kind of items.
 * @param {any} newItem To add to front.
 * @returns {number} The new length of items.
 */


function unshift(items, newItem) {
    // to make space for the new item, we need to shift all existing items to the right.
    // Here we are starting from the end of the array and moving the items to their new position.
  for ( i = items.length; i >= 0; i--) {
    items[i] = items[i-1];
  }
//   Here we are placing the new item at the beginning of the array with items[0]
items[0] = newItem;

// returning the new length of the array
return items.length;
}

// For the unshift() function, we iterate over the array in reverse order, shifting each item to the right by one position. Then, we place the new item at the beginning of the array.

console.log(unshift(arr1, newItem1));
console.log(arr1);
console.log(unshift(arr2, newItem2));
console.log(arr2);