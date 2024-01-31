import { changePath } from "./directory.mjs";
const commandList = [
  {
    command: 'ls',
    expectedParams: 0,
    handlerFunction: () => {
      console.log('list directory')
    }
  },
  {
    command: 'up',
    expectedParams: 0,
    handlerFunction: () => {
      changePath('..')
    }
  },
  {
    command: 'cd',
    expectedParams: 1,
    handlerFunction: (params) => {
      changePath(params[0])
    }
  },
  {
    command: 'cat',
    expectedParams: 1,
    handlerFunction: (params) => {
      console.log(`read file ${params[0]}`)
    }
  },
  {
    command: 'add',
    expectedParams: 1,
    handlerFunction: (params) => {
      console.log(`create file ${params[0]}`)
    }
  },
  {
    command: 'rn',
    expectedParams: 2,
    handlerFunction: (params) => {
      console.log(`rename file ${params[0]} to ${params[1]}`)
    }
  },
];

export default commandList;
