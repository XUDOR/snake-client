const net = require("net"); // net module from NODE.js
const { IP, PORT } = require('./constants');



const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => { // event
    console.log("Successfully connected to the server!");
    conn.write("Name: RDX");
  
  });

  conn.on("data", (data) => { // event
    console.log("Received from server:", data);
  });

  return conn;
};

module.exports = { connect };
