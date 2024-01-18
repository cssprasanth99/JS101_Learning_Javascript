var arr = [10, 24, 56, 72, -10, -88, 100, 564];
var avg = arr.reduce(function (acc, curr, index, arr) {
    var sum = acc + curr;
    if (index === arr.length - 1) {
        return sum / arr.length;
    }
    return sum;
});
console.log(avg);