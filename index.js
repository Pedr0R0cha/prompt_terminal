const readline = require('readline');
const readline_interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function prompt(msg) {
  return new Promise((resolve, reject) => {
    readline_interface.question(msg, (answer) => {
      switch (answer) {
        case null:
          reject('Resposta nula');
          break;
        case undefined:
          reject('Resposta undefined(indefinida)')
          break;
      }

      let respostaTipada = new Number(answer).valueOf();
      Number.isNaN(respostaTipada) ? respostaTipada = answer.toString() : 0;

      resolve(respostaTipada);
    });
  });
}

module.exports = prompt