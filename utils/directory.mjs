import os from 'os';

let currentPath = os.homedir();

const getCurrentPath = () => {
  return currentPath;
}

const changePath = (newPath) => {
  currentPath = newPath;
}
export { getCurrentPath, changePath };
