const getCurrentPath = () => {
  return process.cwd();
}

const changePath = (newPath) => {
  try {
    if (newPath.slice(-1) === ':') {
      console.log('To switch to another drive, use the command "cd X:\\"');
      throw new Error();
    } else {
      process.chdir(newPath);
    }
  } catch (error) {
    console.log('Operation failed')
  }
}
export { getCurrentPath, changePath };
