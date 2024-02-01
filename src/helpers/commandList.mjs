import {
  createEmptyFile, 
  changePath,
  list,
  readFile,
  removeFile,
  renameFile,
  copyFile,
  moveFile,
} from '../handlers/index.mjs'

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
  {
    command: 'cp',
    expectedParams: 2,
    handlerFunction: async ([pathToFile, newPath]) => {
      await copyFile(pathToFile, newPath);
    }
  },
  {
    command: 'mv',
    expectedParams: 2,
    handlerFunction: async ([pathToFile, newPath]) => {
      await moveFile(pathToFile, newPath);
    }
  },
];

export default commandList;
