import {
  createEmptyFile,
  changePath,
  list,
  readFile,
  removeFile,
  renameFile,
  copyFile,
  moveFile,
  osData,
  hash,
  compressDecompress
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
    command: 'hash',
    expectedParams: 1,
    handlerFunction: async ([pathToFile]) => {
      await hash(pathToFile);
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
    command: 'compress',
    expectedParams: -1,
    handlerFunction: async ([pathToFile, newPath]) => {
      await compressDecompress('compress', pathToFile, newPath);
    }
  },
  {
    command: 'decompress',
    expectedParams: -1,
    handlerFunction: async ([pathToFile, newPath]) => {
      await compressDecompress('decompress', pathToFile, newPath);
    }
  },
  {
    command: 'mv',
    expectedParams: 2,
    handlerFunction: async ([pathToFile, newPath]) => {
      await moveFile(pathToFile, newPath);
    }
  },
  {
    command: 'os',
    expectedParams: -1,
    handlerFunction: (params) => {
      osData(params);
    }
  },

];

export default commandList;
