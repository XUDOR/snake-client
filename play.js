const { connect } = require("./client");
const { setupInput } = require("./input");


console.log("Connecting ...");


// Call the setupInput function to start listening for user keyboard inputs
const connection = connect();
setupInput(connection);

