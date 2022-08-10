//1523.
var countOdds = function (low, high) {
    let nums = [];
    let count = 0;
    for (let i = low; i <= high; i++) {
        if (i % 2 !== 0) {
            nums.push(i);
            count++;
        }
    }
    console.log(`The odd numbers between ${low} and ${high} are ${nums}.`)
    return count;
};