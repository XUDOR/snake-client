const { connect } = require("./client");
const { setupInput } = require("./input");


console.log("Connecting ...");
connect();

// Call the setupInput function to start listening for user keyboard inputs
setupInput();
