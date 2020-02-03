const Adder = require("./Adder.js");

let adder = new Adder(
    {
        a: 10,
        b: 5
    }
)

console.log(adder.render());