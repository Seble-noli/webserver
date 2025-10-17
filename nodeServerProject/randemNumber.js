//Create a module called my "randomNumber".

//a. The "randomNumber" module has a function called random(). The random function just returns a random number when it gets executed


 function random(){
    return Math.floor(Math.random() * Number.MAX_SAFE_INTEGER)
}
//bb. Execute the function inside the module
//random()
//c. Save the returned value in a variable and log the variable on the console. Now, run your module on the terminal to see the printed output
let randomNum = random();
console.log(randomNum)
//d. Export your module so that it is accessible to other module
module.exports = {random}
