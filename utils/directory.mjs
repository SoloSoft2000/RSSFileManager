const getCurrentPath = () => {
  return process.cwd();
}

const changePath = (newPath) => {
  process.chdir(newPath);
}
export { getCurrentPath, changePath };
