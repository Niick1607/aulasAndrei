const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Qual sua idade? ', (idade) => {
    if (idade < 16) {
        console.log('Não possui idade para votar!');
    } else if (idade >= 16 && idade < 18 || idade >= 70) {
        console.log('Voto facultativo!');
    } else if (idade >= 18 && idade < 70) {
        console.log('Voto obrigatório!');
    }
});