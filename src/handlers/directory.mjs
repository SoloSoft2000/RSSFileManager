const getCurrentPath = () => {
  return process.cwd();
}

const changePath = (newPath) => {
  try {
    process.chdir(newPath);    
  } catch (error) {
    console.log('Operation failed')
  }
}
export { getCurrentPath, changePath };
