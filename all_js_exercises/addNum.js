const readline = require("readline");
// Create the interface from the module
// this will allow us to receive user input
// via the terminal
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


let addNumbers = function(sum, numsLeft, completionCallback) {
  if (numsLeft > 0) {
    rl.question(`Please input a number.`, answer => {
      let sum2 = sum + parseInt(answer);
      console.log(sum2);
      addNumbers(sum2, numsLeft - 1, completionCallback);
    });
  } else {
    return completionCallback(sum);
  }
};

addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));
