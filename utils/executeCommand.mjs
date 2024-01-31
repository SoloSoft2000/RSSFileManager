import commandList from "./commandList.mjs";
const executeCommand = (parsedCommand) => {
  const commandToExecute = commandList.find((item) => parsedCommand[0] === item.command);
  if (commandToExecute && commandToExecute.expectedParams === parsedCommand.length - 1) {
    commandToExecute.func(parsedCommand.slice(1));
  } else {
    console.log('Invalid input');
  }
  return;
}

export default executeCommand;
