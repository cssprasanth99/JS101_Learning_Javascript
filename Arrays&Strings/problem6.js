function oddArraySum(n, arr) {
    var sum = 0;
    for (i = 0; i < n; i++) {
        if (arr[i] % 2 !== 0) {
            sum = sum + arr[i];
        }
    }
    console.log(sum);
}
oddArraySum(5, [1, 2, 3, 4, 5]);