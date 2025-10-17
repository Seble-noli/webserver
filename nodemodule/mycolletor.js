//let x = require('./myfirst')
//console.log(x.myMultiplier(5));

//let y = require("./mySecond");
//console.log(y.myMultiplier(5));
//4Qa
//const tx = require("./myfirst.js")
//const fs = require("fs");

//let num = 14;
 //let results = tx.myMultiplier(num)
 //console.log(results)
//const message =
  //`The value of ${num} when passed through the myMultiplier function  is  ${results}.`;

  //fs.writeFile("results.txt", message, (err) =>{
    //if (err) {
   // console.error(err)    
    //}
    //else{
       // console.log("Result successfully written to resules.text")
   // }
  //})

//4Qb
const tx2 = require("./mySecond.js");
const fs = require("fs");

let value = 14;
let result2 = tx2.myMultiplier(value);
console.log(result2);
const message2 = `The value of ${value} when passed through the myMultiplier function  is  ${result2}.\n`;

fs.appendFile("results.txt", message2, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log("Result successfully written to resules.text");
  }
});
