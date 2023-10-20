let connection;

const handleUserInput = function (key) {
  // If the user enters ctrl + c (end of text character), exit the game
  if (key === '\u0003') {
    process.exit();
  }

  // WASD Movement user input
  switch (key) {
  case 'w':
    connection.write('Move: up');
    break;
  case 'a':
    connection.write('Move: left');
    break;
  case 's':
    connection.write('Move: down');
    break;
  case 'd':
    connection.write('Move: right');
    break;
  case '1':
    connection.write('Say: King of NY A#1! ');
    break;
  }
};

const setupInput = (conn) => {
  connection = conn;  // <-- This is the key line. Assign the passed connection to the module-level variable.

  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  // Register the handleUserInput function as the "data" callback handler for stdin
  stdin.on("data", handleUserInput);

  return stdin;
};

module.exports = { setupInput };
