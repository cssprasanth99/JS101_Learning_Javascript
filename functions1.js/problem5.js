
function lowercase(x) {
    let lower = "abcdefghijklmnopqrstuvwxyz";
    let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for (let i = 0; i < upper.length; i++) {
        if (x == upper[i]) {
            return lower[i];
        }
    }
    return x;
}

function convertwordlower(word) {
    let bag = "";
    for (i = 0; i < (word.length); i++) {
        let p = lowercase(word[i]);
        bag = bag + p;
    }
    return bag;
}
function convertarraylower(arr) {
    let box = [];
    for (i = 0; i < arr.length; i++) {
        let new_mango = convertwordlower(arr[i]);
        box.push(new_mango);
    }
    return box;
}
var inputArray = ["MA", "SA", "I", "SCH", "OOL"];
var outputArray = convertarraylower(inputArray);
console.log(outputArray);


