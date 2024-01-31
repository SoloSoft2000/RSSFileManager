import { changePath } from "./directory.mjs";
const commandList = [
  { command: 'ls', expectedParams: 0, func: () => {console.log('list directory')} },
  { command: 'up', expectedParams: 0, func: () => {console.log('up directory')} },
  { command: 'cd', expectedParams: 1, func: (params) => {changePath(params[0])} },
  { command: 'cat', expectedParams: 1, func: (params) => {console.log(`read file ${params[0]}`)} },
  { command: 'add', expectedParams: 1, func: (params) => {console.log(`create file ${params[0]}`)} },
  { command: 'rn', expectedParams: 2, func: (params) => {console.log(`rename file ${params[0]} to ${params[1]}`)} },
];

export default commandList;
