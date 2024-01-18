function isOdd(num) {
    return num % 2 !== 0;
}


for (i = 0; i < 10; i++) {
    if (isOdd(i)) {
        console.log(i, "is Odd");
    }
}