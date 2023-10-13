const removeFromArray = function(A, ...B) {
    return A.filter(itemA => !B.includes(itemA))

};

// Do not edit below this line
module.exports = removeFromArray;
