/* 
Write two functions:

1. A function that returns a new string that is the given string with the first
letter capitalized.

2. Given an array of strings,
return the same array with the first letter of each string capitalized using
the previously created helper function.

HINT: strings are immutable so to change a string you must create a new version
of it.
*/

/* Tests for capitalize function */
var string1 = "hello";
var expected1 = "Hello";

var string2 = "";
var expected2 = "";


/**
 * Capitalizes the first letter of the given string.
 * @param {string} string The string to capitalize.
 * @returns {string} The given string with the first letter capitalized or an
 *    empty string.
 */
function capitalize(string) {
    const str2 = string.charAt(0).toUpperCase() + string.slice(1);
    return str2
}
console.log(capitalize(string1))


/* Tests for capitalization function */
var strings1 = ["hello", "world"];
var expectedStrings1 = ["Hello", "World"];

/**
 * Capitalizes the first letter of each string in the given array.
 * @param {Array<string>} strings
 * @returns {Array<string>} The same given array with updated items.
 */
function capitalization(strings) {
    for (var loopThroughArray = 0; loopThroughArray < strings.length; loopThroughArray++){
        strings[loopThroughArray] = capitalize(strings[loopThroughArray]);
    }
}
