/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */

let connection;

const setupInput = function(conn) {
  // Stores the active TCP connection object.
  connection = conn;
  
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  //  callback handler for stdin
  const handleUserInput = function() {
    stdin.on('data', (key) => {
      if (key === '\u0003') {
        console.log("Thanks for using me, ciao!")
        process.exit();
      } else if (key === "w" || key === "W") {
        // console.log("up");
        conn.write('Move: up');
      } else if (key === "d" || key === "D") {
        // console.log("right");
        conn.write('Move: right');
      } else if (key === "a" || key === "A") {
        // console.log("left");
        conn.write('Move: left');
      } else if (key === "s" || key === "S") {
        // console.log("down");
        conn.write('Move: down');
      }
    });
  }
  handleUserInput();
  return stdin;
}

module.exports = {setupInput};