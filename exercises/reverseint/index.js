// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    //NOTE This turns our integer into a reversed string
   const reversed =  n.toString().split('').reverse().join('');

   //The Math.sign method will assign a negative sign if the number is negative
   return parseInt(reversed) * Math.sign(n);
}

module.exports = reverseInt;
