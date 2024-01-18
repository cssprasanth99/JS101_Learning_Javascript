function indOf(arr, name) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === name) {
            return i;
        }
    }
}

var array = ['Alice', 'Bob', 'Tiff', 'Bruce'];
console.log(indOf(array, "Bob"));