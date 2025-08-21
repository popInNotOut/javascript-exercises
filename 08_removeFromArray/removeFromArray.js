const removeFromArray = function(arr, ...rmv) {
    let ret = [];
    for (let item of arr){
        if (!rmv.includes(item)){
            ret.push(item);
        }
    }
    return ret;
};

// Do not edit below this line
module.exports = removeFromArray;
