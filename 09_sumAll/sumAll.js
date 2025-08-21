const sumAll = function(l, r) {
    if (typeof l !== 'number' || !Number.isInteger(l) || typeof r !== 'number' || !Number.isInteger(r) || l < 0 || r < 0){
        return "ERROR";
    }
    if (l > r){
        let tmp = l;
        l = r;
        r = tmp;
    }
    let sum = 0;
    for (let i = l; i <= r; i++){
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
