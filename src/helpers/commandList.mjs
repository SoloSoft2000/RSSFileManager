import { createEmptyFile } from '../handlers/createEmptyFile.mjs';
import { changePath } from '../handlers/directory.mjs';
import { list } from '../handlers/list.mjs';
import { readFile } from '../handlers/readFile.mjs';
import { removeFile } from '../handlers/removeFile.mjs';
import { renameFile } from '../handlers/renameFile.mjs';

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
    handlerFunction: ([pathName]) => {
      changePath(pathName);
    }
  },
  {
    command: 'cat',
    expectedParams: 1,
    handlerFunction: async ([pathToFile]) => {
      await readFile(pathToFile);
    }
  },
  {
    command: 'add',
    expectedParams: 1,
    handlerFunction: async ([fileName]) => {
      await createEmptyFile(fileName);
    }
  },
  {
    command: 'rm',
    expectedParams: 1,
    handlerFunction: async ([fileName]) => {
      await removeFile(fileName);
    }
  },
  {
    command: 'rn',
    expectedParams: 2,
    handlerFunction: async ([pathToFile, newFileName]) => {
      await renameFile(pathToFile, newFileName);
    }
  },
];

export default commandList;
