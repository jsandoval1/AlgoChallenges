/* 
Braces Valid

Given a string sequence of parentheses, braces and brackets, determine whether it is valid. 
*/

const str1 = "W(a{t}s[o(n{ c}o)m]e )h[e{r}e]!";
const expected1 = true;

const str2 = "D(i{a}l[ t]o)n{e";
const expected2 = false;

const str3 = "A(1)s[O (n]0{t) 0}k";
const expected3 = false;

/**
 * Determines whether the string's braces, brackets, and parenthesis are valid
 * based on the order and amount of opening and closing pairs.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @returns {boolean} Whether the given strings braces are valid.
 */

function bracesValid(str) {
    const stack = [];
    const openBrackets = "([{";
    const closeBrackets = ")]}";

    for (let char of str) {
        if (openBrackets.includes(char)) {
            stack.push(char);
        } else if (closeBrackets.includes(char)) {
            const lastOpenBracket = stack.pop();
            if (!lastOpenBracket || openBrackets.indexOf(lastOpenBracket) !== closeBrackets.indexOf(char)) {
                return false;
            }
        }
    }

    return stack.length === 0;
}

console.log(bracesValid(str1))
console.log(bracesValid(str2))
console.log(bracesValid(str3))

/*****************************************************************************/