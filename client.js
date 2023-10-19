const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("Successfully connected to the server!");
  });

  conn.on("connect", () => {
    conn.write("Name: RDX");
  });

  conn.on("data", (data) => {
    console.log("Received from server:", data);
  });

  return conn;
};

module.exports = { connect }; // This is the ES6 shorthand syntax