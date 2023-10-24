// algo 2
/* 
Acronyms

Create a function that, given a string, returns the string’s acronym 
(first letter of each word capitalized). 

Do it with .split first if you need to, then try to do it without
*/

const str1 = "object oriented programming";
const expected1 = "OOP";

// The 4 pillars of OOP
const str2 = "abstraction polymorphism inheritance encapsulation";
const expected2 = "APIE";

const str3 = "software development life cycle";
const expected3 = "SDLC";

// Bonus: ignore extra spaces
const str4 = "  global   information tracker    ";
const expected4 = "GIT";


function acronymize(str) {
    const splitString = str.toUpperCase().split(' ');
    var answer = ""
    for (i = 0; i < splitString.length; i++)
        (splitString[i] != '') ? answer += splitString[i][0] : false;
    return answer;
}

console.log(acronymize(str1) + " should be " + expected1)
console.log(acronymize(str2) + " should be " + expected2)
console.log(acronymize(str3) + " should be " + expected3)
console.log(acronymize(str4) + " should be " + expected4)