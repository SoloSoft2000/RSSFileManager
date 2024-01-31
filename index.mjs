import readline from 'readline';
import { getArgValue, parseCommand} from './utils/ParseFuncs.mjs';
import executeCommand from './utils/executeCommand.mjs';
import { getCurrentPath } from './utils/directory.mjs';

const userName = getArgValue(process.argv.slice(2), 'username') || 'Anonymus';

console.log(`Welcome to the File Manager, ${userName}!`);
console.log(`You are currently in ${getCurrentPath()}`);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', (input) => {
  if (input === '.exit') {
    rl.close();
  } else {
    executeCommand(parseCommand(input));
    console.log(`You are currently in ${getCurrentPath()}`);
  }
});

rl.on('SIGINT', rl.close);

rl.on('close', () => {
  console.log(`Thank you for using File Manager, ${userName}, goodbye!`);
});
