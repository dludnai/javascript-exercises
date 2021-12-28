const reverseString = function(str) {
     let splitString = str.split(''); // "string".split(""); returns an array like this: ["s", "t", "r", "i", "n", "g"]
     let reverseArray = splitString.reverse(); // This function reverses the array ["g", "n", "i", "r", "t", "s"]
     let joinArray = reverseArray.join(''); // Joins all elements into a string
     return joinArray;
};
// Do not edit below this line
module.exports = reverseString;
