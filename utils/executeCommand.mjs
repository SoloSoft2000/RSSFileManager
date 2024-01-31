import commandList from "./commandList.mjs";
const executeCommand = (parsedCommand) => {
  const commandToExecute = commandList.find((item) => parsedCommand[0] === item.command);
  if (commandToExecute && commandToExecute.expectedParams === parsedCommand.length - 1) {
    try {
      commandToExecute.handlerFunction(parsedCommand.slice(1));  
    } catch (error) {
      console.log('Operation failed');
    }
  } else {
    console.log('Invalid input');
  }
  return;
}

export default executeCommand;
