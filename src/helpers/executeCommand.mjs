import commandList from "./commandList.mjs";
const executeCommand = async ([command, ...params]) => {
  const commandToExecute = commandList.find((item) => command.toLowerCase() === item.command);
  if (commandToExecute) {
    if ((commandToExecute.expectedParams === -1 && params.length > 0) ||
      (commandToExecute.expectedParams !== -1 && commandToExecute.expectedParams === params.length)) {
      try {
        await commandToExecute.handlerFunction(params);  
      } catch (error) {
        console.log('Operation failed');
      }
    } else {
      console.log('Invalid input');
    }
  } else {
    console.log('Invalid input');
  }
   
  return;
}

export default executeCommand;
