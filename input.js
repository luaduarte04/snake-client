/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */
const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

    //  callback handler for stdin
  const handleUserInput = function(sIn) {
    stdin.on('data', (key) => {
      if (key === '\u0003') {
        console.log("Thanks for using me, ciao!")
        process.exit();
      }
    });
  }
  handleUserInput();
  return stdin;
}

module.exports.setupInput = setupInput;