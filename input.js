const handleUserInput = function (key) {
  // If the user enters ctrl + c (end of text character), exit the game
  if (key === '\u0003') {
    process.exit();
  }

  // WASD Movement user input
  switch (key) {
  case 'w':
    console.log('Move: up');
    break;
  case 'a':
    console.log('Move: left');
    break;
  case 's':
    console.log('Move: down');
    break;
  case 'd':
    console.log('Move: right');
    break;
  }
};

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  // Register the handleUserInput function as the "data" callback handler for stdin
  stdin.on("data", handleUserInput);

  return stdin;
};

module.exports = { setupInput };
