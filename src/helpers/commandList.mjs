import { changePath } from '../handlers/directory.mjs';
import { list } from '../handlers/list.mjs';
import { readFile } from '../handlers/readFile.mjs';

const commandList = [
  {
    command: 'ls',
    expectedParams: 0,
    handlerFunction: async () => {
      await list();
    }
  },
  {
    command: 'up',
    expectedParams: 0,
    handlerFunction: () => {
      changePath('..');
    }
  },
  {
    command: 'cd',
    expectedParams: 1,
    handlerFunction: (params) => {
      changePath(params[0]);
    }
  },
  {
    command: 'cat',
    expectedParams: 1,
    handlerFunction: async (params) => {
      await readFile(params[0]);
    }
  },
  {
    command: 'add',
    expectedParams: 1,
    handlerFunction: (params) => {
      console.log(`create file ${params[0]}`);
    }
  },
  {
    command: 'rn',
    expectedParams: 2,
    handlerFunction: (params) => {
      console.log(`rename file ${params[0]} to ${params[1]}`);
    }
  },
];

export default commandList;
