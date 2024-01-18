function arraySum(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    return sum;
}
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function arryAverage(arr) {
    if (arr.length == 0) {
        return 0;
    }
    var sum = arraySum(arr);
    var average = sum / arr.length;
    return average;
}
console.log(arryAverage(arr));