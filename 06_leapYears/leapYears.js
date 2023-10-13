const leapYears = function(year) {
    let y1 = year % 4
    let y2 = year % 100
    let y3 = year % 400
    if ((y1 === 0 && y2 !== 0) || y3 === 0) {
        return true
    } 
    else {return false}

};

// Do not edit below this line
module.exports = leapYears;
