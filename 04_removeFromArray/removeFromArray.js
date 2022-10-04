const removeFromArray = function(arr, ...args) {
    const normalArray = args;
    let difference = arr.filter(x => !normalArray.includes(x));
    return difference;
};

// Do not edit below this line
module.exports = removeFromArray;
