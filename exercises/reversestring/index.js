// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    //NOTE This is probably not going to fly, too easy.
    // return str.split('').reverse().join('');

    // NOTE For Of Loop iteration solution
    // let reversed = '';
    //
    // for (let char of str) {
    //     reversed = char + reversed;
    // }
    // return reversed;

    //NOTE Reduce method
    return str.split('').reduce((rev, char) => char + rev, '');
}

module.exports = reverse;
