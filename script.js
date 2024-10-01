// let n =5;

// for(let i =1 ; i <=5 ; i++){
//     console.log("Hello" , i);
// }

// console.log(process.argv);

// let args = process.argv;

// for (let i = 2 ; i <args.length ; i++){
//     console.log("Hello to" ,args[i]);
// }

// const somevalue = require("./math");
// console.log(somevalue);

// const info = require("./fruits");
// console.log(info);


// const figlet = require("figlet");

// figlet("Anil Yadav", function (err, data) {
//     if (err) {
//       console.log("Something went wrong...");
//       console.dir(err);
//       return;
//     }
//     console.log(data);
//   });


import { sum ,pi }  from "./math.js";
console.log (sum(2,1));