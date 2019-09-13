const readline = require("readline");
// Create the interface from the module
// this will allow us to receive user input
// via the terminal
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let askIfGreaterThan = function(ele1, ele2, callback) {
  rl.question(`is ${ele1} greater than ${ele2}? (yes or no)`, answer => {
    if (answer === "yes") {
      callback(true);
    } else {
      callback(false);
    }
  });
}

let innerBubbleSortLoop = function(arr, i, madeAnySwaps, outerBubbleSortLoop) {
  if (i < (arr.length - 1)) {
    askIfGreaterThan(arr[i], arr[i + 1], function(x) {
      if (x === true) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        madeAnySwaps = true;
      }
      innerBubbleSortLoop(arr, i + 1, madeAnySwaps, outerBubbleSortLoop);
    })
  } else {
    outerBubbleSortLoop(madeAnySwaps);
  }
}

let absurdBubbleSort = function(arr, sortCompletionCallback) {
  // let bool = true;
  let outerBubbleSortLoop = function(bool) {
    if(bool === true) {
      innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop);
    } else {
      sortCompletionCallback(arr);
    }
  }
  outerBubbleSortLoop(true);
}


absurdBubbleSort([3, 2, 1], function(arr) {
  console.log("Sorted array: " + JSON.stringify(arr));
  rl.close();
});
