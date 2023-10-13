const reverseString = function(text) {
    let txtArr = text.split("")
    let text1 = ""
    for (i = txtArr.length - 1; i >= 0; i--) {
        text1 += txtArr[i]
    }
    return text1
};

// Do not edit below this line
module.exports = reverseString;
