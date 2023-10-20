
const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("Successfully connected to the server!");
    conn.write("Name: RDX");
    
    //loop :: //probably gone >
    let count = 0;
    const interval = setInterval(() => { /// setInterval
      if (count < 10) {
        conn.write("Move: up"); // probably going to be removed.. >>
        count++;
      } else {
        clearInterval(interval); // Clear the interval after sending the command 10 times
      }
    }, 700);  // delay of 500 milliseconds
  });
  

  conn.on("data", (data) => {
    console.log("Received from server:", data);
  });

  return conn;
};

module.exports = { connect }; // This is the ES6 shorthand syntax
