// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

//Using bottom-up
function fib(n) {
    //Base cases
    if (n <= 2) {
        return 1;
    }

    const fibNums = [0, 1, 1];

    for (let i = 3; i <= n; i++) {
        fibNums[i] = fibNums[i - 1] + fibNums[i - 2];
    }

    return fibNums[n];
}

module.exports = fib;


// NOTE Using memoization
// function fib(n, memo = []) {
//     //Base cases
//     if (memo[n] !== undefined) {
//         return memo[n];
//     }
//     if (n <= 2) {
//         return 1;
//     }
//
//     const result = fib(n-1, memo) + fib(n-2, memo);
//
//     memo[n] = result;
//
//     return result;
// }

// NOTE Recursive version, horrible runtime, O(2^n), without bottom up or memoization
// function fib(n) {
        //Base case
//     if (n < 2) {
//         return n;
//     }
//
//     return fib(n-1) + fib(n-2);
// }

// NOTE Iterative version, O(n) linear time
// function fib(n) {
//     const result = [0,1];
//
//     for (let i = 2; i <= n; i++){
//         const a = result[i - 1];
//         const b = result[i - 2];
//
//         result.push(a + b);
//     }
//
//     return result[n];
// }

