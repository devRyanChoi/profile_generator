const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What's your name? ", (answer) => {
  const name = answer;
  rl.question("What was your favourate book as a child? ", (answer) => {
    const book = answer;
    rl.question('Which meal is your favourite', (answer) => {
      const meal = answer;
      rl.question('What is your favourite movie ', (answer) => {
        const movie = answer;
        rl.question('Which sport is your absolute favourite? ', (answer) => {
          const favesport = answer;
          rl.question('What did you want to be when you grew up? ', (answer) => {
            const became = answer;
            console.log(`Hi ${name}. ${name} was into the ${book}. ${name} love ${meal}. ${name} loved ${movie}. ${name} prefer ${favesport} over other sports. ${name} wanted to be ${became}. `);
            rl.close();
          });
        });
      });
    });
  });   
});
