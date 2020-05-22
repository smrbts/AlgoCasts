// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// NOTE Recursive solution
function steps(n, row = 0, stair = '') {
    //Base case
    if (n === row) {
        return;
    }

    if (n === stair.length) {
        console.log(stair);
        return steps(n, row + 1);
    }

    if (stair.length <= row) {
        stair += '#';
    } else {
        stair += ' ';
    }

    steps(n, row, stair);
}

module.exports = steps;

// NOTE Not very time efficient O(n^2) with nested loops
// function steps(n) {
//     for (let row = 0; row < n; row += 1) {
//         let stair = '';
//
//         for (let col = 0; col < n; col += 1) {
//             if (col <= row) {
//                 stair += '#';
//             } else {
//                 stair += ' ';
//             }
//         }
//
//         console.log(stair);
//     }
// }
