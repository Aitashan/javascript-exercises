//let num = parseInt(prompt("Enter number of repitition: ", 3))
//let text = prompt("Enter text to be repeated: ", "Hey")

const repeatString = function(string, num) {
    if (num === 0) {return ""}
    else if (num < 0) {return "ERROR"}
    else {
        let rText = ""
        for (x=1; x<=num; x++) {
         rText += string    
        }
        return rText;
    }
    
};

// Do not edit below this line
module.exports = repeatString;
