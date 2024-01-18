function subString(str, start, end) {
    let newStr = "";
    if (end == undefined) {
        for (let i = start; i < str.length; i++) {
            newStr += str[i];
        }
        return newStr;
    }
    else {
        for (let i = start; i < end; i++) {
            newStr = newStr + str[i];
        }
        return newStr;
    }
}
var str = "Mozilla";
var x = subString(str, 2);
console.log(x);