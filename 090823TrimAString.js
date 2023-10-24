/* 
Given a string that may have extra spaces at the start and the end,
return a new string that has the extra spaces at the start and the end trimmed (removed)
do not remove any other spaces.
*/

var str1 = "   hello        world i love     donuts    ";
var expected1 = "hello world";

/**
 * Trims any leading or trailing white space from the given str.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @returns {string} The given string with any leading or trailing white space
 *    stripped.
 */
function trim(str) { }

/*****************************************************************************/
/**
 * Trims any leading or trailing white space from the given str.
 * - Time: O(n), where n is the length of the input string.
 * - Space: O(1).
 * @param {string} str
 * @returns {string} The given string with any leading or trailing white space
 *    stripped.
 */
// Use String.prototype.trim() to remove leading and trailing spaces.
// Split the trimmed string on spaces to preserve interior spaces.
// Remove any empty string elements using filter.
// Join the filtered words with spaces to reconstruct the trimmed string.
function trim(str) {
    var trimmedStr = str.trim();

    var words = trimmedStr.split(" ");

    var filteredWords = words.filter(function (word) {
        return word !== "";
    });

    var result = filteredWords.join(" ");

    return result;
}

console.log(trim(str1)); 

