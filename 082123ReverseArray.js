/* 
  Given an array, reverse it's items in place
  return the array after reversing it

  Do it in place without using any built in methods
*/

var arr1 = [1, 2, 3];
var expected1 = [3, 2, 1];

var arr2 = ["a", "b"];
var expected2 = ["b", "a"];

var arr3 = ["a"];
var expected3 = ["a"];

var arr4 = [];
var expected4 = [];

//two variables
function reverseArr(items) {
    var j = items.length - 1;
    for (i = 0; i < j; i++, j--) {
        var temp = items[j];
        items[j] = items[i];
        items[i] = temp;
    }
    return items;
}

// one variable
function reverseArr(items) {
    for (i = 0; i < items.length - 1 - i; i++) {
        var temp = items[i];
        items[i] = items[items.length - 1 - i];
        items[items.length - i - 1] = temp;
    }
    return items;
}

// defining end point as exactly halfway through array
function reversArr(items) {
    for (i = 0; i < Math.floor(items.length / 2); i++) {
        var temp = items[i];
        items[i] = items[items.length - 1 - i];
        items[items.length - i - 1] = temp;
    }
    return items;
}
