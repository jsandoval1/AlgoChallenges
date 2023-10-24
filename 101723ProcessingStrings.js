/* 
 ██╗ ██╗ 
████████╗
╚██╔═██╔╝
████████╗
╚██╔═██╔╝
 ╚═╝ ╚═╝ 
         
    Given two 🎻 strings S and T containing only lowercase letters and "#" characters,
    return if they are equal when both are typed into empty text editors.
    👉 '#' character means a 'backspace' character.
    i.e., after processing the backspaces, are the two strings equal?
    return true or false
    Ninja Bonus: solve in O(n) time
*/

//          v
const S1 = "ab#c";
// a -> ab -> a -> ac
//          v
const T1 = "ad#c";
// a -> ad -> a -> ac
const expected1 = true;
// Explanation: Both S and T become "ac"

//          v
const S2 = "ab##";
// ["a", "b"]
// "str1"
// a -> ab -> a -> ""
const T2 = "c#d#";
// []
// "str2"
// c -> "" -> d -> "" 
const expected2 = true;
// Explanation: Both S and T become ""

const S3 = "a##c";
// a -> "" -> "" -> c
const T3 = "#a#c";
// "" -> a -> "" -> c
const expected3 = true;
// Explanation: Both S and T become "c"

const S4 = "a#c";
// a -> "" -> c
const T4 = "b";
// b
const expected4 = false;
// Explanation: S becomes "c" while T becomes "b".


function backspaceStringCompare(S, T) {
    function processString(str) {
        const result = [];

        // Step 1: Iterate through the string from left to right
        for (let i = 0; i < str.length; i++) {
            const char = str[i];

            // Step 2: If the character is not a backspace ("#"), add it to the result
            if (char !== "#") {
                result.push(char);
            } else {
                // Step 3: If the character is a backspace, remove the last character from the result
                if (result.length > 0) {
                    result.pop();
                }
            }
        }

        // Step 4: Return the final processed string
        return result.join("");
    }

    // Step 5: Process both input strings S and T
    const processedS = processString(S);
    const processedT = processString(T);

    // Step 6: Compare the processed strings
    return processedS === processedT;
}

// Test cases
console.log("Test Case 1 - Expected: " + expected1 + " Actual: " + backspaceStringCompare(S1, T1));
console.log("Test Case 2 - Expected: " + expected2 + " Actual: " + backspaceStringCompare(S2, T2));
console.log("Test Case 3 - Expected: " + expected3 + " Actual: " + backspaceStringCompare(S3, T3));
console.log("Test Case 4 - Expected: " + expected4 + " Actual: " + backspaceStringCompare(S4, T4));

