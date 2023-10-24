

    // Given an array of integers, return indices of the
    // two numbers such that they add up to a specific target.

    // You may assume that each input would have EXACTLY ONE SOLUTION,
    // and you may not use the same element twice.

    // the array is unsorted, contains no floats, and there may be duplicate values

// Example 1
const example1Array = [2, 11, 7, 15];
const example1Target = 9;
const result1 = twoSum(example1Array, example1Target);

// Example 2
const example2Array = [3, 2, 4];
const example2Target = 6;
const result2 = twoSum(example2Array, example2Target);

// Example 3
const example3Array = [3, 3];
const example3Target = 6;
const result3 = twoSum(example3Array, example3Target);

// R.I.O.T.   Read Input Output Talk

// 1. Driver 🚗
// 2. Presenter 👩‍💻
// 3. Navigator 🧭

// 👉  take a few mins to write the pseudocode first
// create the function and decide what params it needs and what it will return here:

function twoSum (array, target) {
    const hashTable = {}

    for (let i = 0; i < array.length; i++) {
        if (hashTable.hasOwnProperty(array[i])) {
            return [hashTable[array[i]], i]
        }
        //* use target - array[i] to calculate the 'complement' number to search for
        //* store the complement as a key, current index as value
        //* that way, if we find the complement, we can immediately return it and have access
        //* to the original index we need to return 
        hashTable[(target - array[i])] = i;
    }
}

console.log("Example 1:", result1); // Output: [0, 2]

console.log("Example 2:", result2); // Output: [1, 2]

console.log("Example 3:", result3); // Output: [0, 1]
