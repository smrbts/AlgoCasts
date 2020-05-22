// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

//NOTE more concise but relies on knowing how to use .match method
function vowels(str) {
    const matches = str.match(/[aeiou]/gi);

    return matches ? matches.length : 0;
}

module.exports = vowels;

//NOTE first iterative approach
// function vowels(str) {
//     let count = 0;
//     const checker = ['a','e','i','o','u'];
//
//     if(!str) {
//         return false;
//     }
//
//     for (let char of str.toLowerCase()) {
//         if (checker.includes(char)) {
//             count += 1;
//         }
//     }
//
//     return count;
// }
