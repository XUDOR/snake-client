const { connect } = require("./client");

// Define the handleUserInput function
const handleUserInput = function (key) {
  // If the user enters ctrl + c (end of text character), exit the game
  if (key === '\u0003') {
    process.exit();
  }//// user input
};

// Define the setupInput function
const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  // Register the handleUserInput function as the "data" callback handler for stdin
  stdin.on("data", handleUserInput);

  return stdin;
};

console.log("Connecting ...");
connect();

// Call the setupInput function to start listening for user keyboard inputs
setupInput();
