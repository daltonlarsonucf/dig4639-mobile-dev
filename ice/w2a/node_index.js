console.log("Hello world");
var x = [1];
function scopeDemo(x1) {
    x1[0] = 10;
    console.log(x1);
    console.log(x);
    let a = 3, b = 4, c = 5;
    console.log(a);
    console.log(b);
    console.log(c);
    if(true) {
        var x = 0;
    }
}
scopeDemo(x);
console.log(x);