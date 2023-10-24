/*
  Input: a 2 dimensional array of integers
  Output: A 1 dimensional array of all the same elements preserving original order
*/

// this given array has a length of 3 because it has 3 arrays as items
var twoDimArr1 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
var expected1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

var twoDimArr2 = [[1], [2], [3]];
var expected2 = [1, 2, 3];

var twoDimArr3 = [[], [], [10, 20]];
var expected3 = [10, 20];

/**
* Flattens a two dimensional array into a new one dimensional array.
* - Time: O(?).
* - Space: O(?).
* @param {Array<Array<any>>} twoDimArr An array of arrays of any data type.
* @returns {Array<any>} The flattened array that should be one dimensional.
*/
function flatten2dArray(twoDimArr) {
  var arr = [];
  var i0 = twoDimArr[0];
  var i1 = twoDimArr[1];
  var i2 = twoDimArr[2];

  arr = [].concat(i0, i1, i2)

  return arr;

}
console.log(flatten2dArray(twoDimArr3));

// BETTER VERSION:
function flatten2dArray(twoDimArr) {
  var flatArray = [];
  for (i = 0; i < twoDimArr.length; i++) {
    for (j = 0; j < twoDimArr[i].length; j++) {
      flatArray.push(twoDimArr[i][j]);
    }
  }
  return flatArray;
}