# prompt_terminal
Uma forma mais simples de pegar entrada padrão do sistema no NodeJS.

### Segue a forma de uso
#### A função só retorna os tipos string e number
#### É necessário realizar a saída do processo para o processo não ficar esperando o ctrl+c.(Quem souber o motivo mais específico, favor contribuir!)
```
const prompt = require('prompt_terminal');
async function main() {
  let numeroUm = await prompt('Digite o 1º valor: ');
  let numberTwo = await prompt('type the 2º number: ');
  let soma = numeroUm + numberTwo;
  console.log(`a soma dos numeros é: ${soma}`);
  process.exit(0);
}

main();
