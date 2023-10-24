/*
  Interview Question:
  Given a string
  return whether or not it's possible to make a palindrome out of the string's characters
  What is it about a string that makes it possible for it to be a palindrome?
  Determine whether or not it is possible for the string's characters to be
  rearranged into a palindrome.
*/

// racecar
// radar
// tacocat
// level
// kayak

// Define test cases with strings and expected results
const str1 = "";
const expected1 = false;

const str2 = "a";
const expected2 = true;

const str3 = "ddaa";
const expected3 = true; // We can rearrange this to "daad" or "adda"

const str4 = "dda";
const expected4 = true; // We can rearrange this to "dad"

const str5 = "aadda";
const expected5 = true; // We can rearrange this to "daaad"

const str6 = "abc";
const expected6 = false; // This cannot be rearranged into a palindrome

// Define a function to check if a string can be rearranged into a palindrome
function canBecomePalindrome(str) {
    // If the string is empty, it cannot be a palindrome
    if (!str.length) return false;

    // Create an empty object to count the occurrences of each character
    const charCountMap = {};

    // Loop through each character in the string
    for (const char of str) {
        // If the character exists in the map, increment its count, else initialize it to 1
        charCountMap[char] = (charCountMap[char] || 0) + 1;
    }

    // Initialize a variable to count the characters with odd counts
    let oddCount = 0;

    // Loop through the counts of characters in the map
    for (const charCount of Object.values(charCountMap)) {
        // If a character has an odd count, increment the oddCount variable
        if (charCount % 2 !== 0) {
            oddCount++;
        }
    }

    // If the string length is even, there should be no characters with an odd count
    if (str.length % 2 === 0) {
        return oddCount === 0;
    } else {
        // If the string length is odd, there should be exactly one character with an odd count
        return oddCount === 1;
    }
}

// Run the tests and print the results
console.log(canBecomePalindrome(str1)); // false
console.log(canBecomePalindrome(str2)); // true
console.log(canBecomePalindrome(str3)); // true
console.log(canBecomePalindrome(str4)); // true
console.log(canBecomePalindrome(str5)); // true
console.log(canBecomePalindrome(str6)); // false

