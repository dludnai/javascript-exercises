const removeFromArray = function(myArray, num) {
    let myIndex = myArray.indexOf(num);
    if (myIndex > -1) {
        myArray.splice(myIndex, 1);
    }
    return myArray;
};

// Do not edit below this line
module.exports = removeFromArray;
