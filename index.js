let userName = 'Anonymus';

const userNameFullArg = process.argv.slice(2).find((argName) => argName.startsWith('--username='));
if (userNameFullArg)
  userName = userNameFullArg.split('=')[1];

console.log(userName);