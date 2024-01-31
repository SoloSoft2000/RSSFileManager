import commandList from "./commandList.mjs";
const executeCommand = ([command, ...params]) => {
  const commandToExecute = commandList.find((item) => command === item.command);
  if (commandToExecute && commandToExecute.expectedParams === params.length) {
    try {
      commandToExecute.handlerFunction(params);  
    } catch (error) {
      console.log('Operation failed');
    }
  } else {
    console.log('Invalid input');
  }
  return;
}

export default executeCommand;
