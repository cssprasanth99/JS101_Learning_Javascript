function area(length, width) {
    var rectangle = {
        length: length,
        width: width,
        perimeter: function () {
            return 2 * (this.length + this.width);
        },
        area: function () {
            return this.length * this.width;
        }
    }
    return rectangle;
}

console.log(`Perimeter of the rectangle is ${area(4, 5).perimeter()}`);
console.log(`Area of the rectangle is ${area(4, 5).area()}`);
