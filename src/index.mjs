import readline from 'readline';
import os from 'os';
import { getArgValue, parseCommand } from './helpers/ParseFuncs.mjs';
import executeCommand from './helpers/executeCommand.mjs';
import { changePath, getCurrentPath } from './handlers/directory.mjs';

const userName = getArgValue(process.argv.slice(2), 'username') || 'Anonymus';
changePath(os.homedir());

console.log(`Welcome to the File Manager, ${userName}!`);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const question = () => {
  rl.question(`You are currently in ${getCurrentPath()}\n> `, (answer) => processInput(answer));
}

const processInput = async (input) => {
  input = input.trim();
  if (input === '.exit') {
    rl.close();
  } else {
    await executeCommand(parseCommand(input));
    question();
  }
}

question();

rl.on('SIGINT', rl.close);

rl.on('close', () => {
  console.log(`Thank you for using File Manager, ${userName}, goodbye!`);
});
