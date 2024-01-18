function arrayInclude(arr, a) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == a) {
            return true;
        }
        else {
            return false;
        }
    }
}

var arr = [1, 2, 3, 4, 5];
var isIncluded = arrayInclude(arr, 5);
console.log(isIncluded);