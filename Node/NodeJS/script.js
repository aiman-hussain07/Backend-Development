// let n = 4
// for (let i = 0; i < n; i++) {
//     console.log("hello",  i);
// }
// console.log("Bye")

// console.log(module)

// Example of arguments given with node <-filename->
// let args = process.argv;
// for (let i = 2; i < args.length; i++) {
//     console.log(`Hello ${args[i]}`);
// }

// const someValues = require("./math")
// ./ --> means accessing a file in same directory
// console.log(someValues)
// console.log(someValues.sum(1,3))
// console.log(someValues.PI)

// export between two different directories
// const info = require("./newDir")
// console.log(info)

// globally installing packages
// const figlet = require("figlet");

// figlet("Aiman says Hi!", function (err, data) {
//   if (err) {
//     console.log("Something went wrong...");
//     console.dir(err);
//     return;
//   }
//   console.log(data);
// });

// using ES6's import instead of CommonJS's require
// import { sub, g } from "./math.js"
// console.log(sub(2, 6))
// console.log(g)

import { generate } from "random-words";
console.log(generate());