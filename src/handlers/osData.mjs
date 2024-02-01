import os from 'os';

const osData = (params) => {
  params.forEach(element => {
    switch (element.toLowerCase()) {
          case '--eol':
            const endOfLine = os.EOL;
            console.log(`The default system End-Of-Line is \x1b[42m\x1b[30m\x1b[4m "${endOfLine === '\n' ? '\\n' : '\\r\\n'}" \x1b[0m`);
            break;
          case '--cpus':
            const cpus = os.cpus(); 
            console.log(`Amount of CPUS: \x1b[42m\x1b[30m\x1b[4m ${cpus.length} \x1b[0m`);
            console.table(cpus.map((cpu) => {
              return { Model: cpu.model, Speed: `${(cpu.speed / 1000).toFixed(1)} GHz` };
            }))
            break;
          case '--homedir':
            console.log(`Home directory is \x1b[42m\x1b[30m\x1b[4m ${os.homedir()} \x1b[0m`);
            break;
          case '--username':
            console.log(`System user name is \x1b[42m\x1b[30m\x1b[4m ${os.userInfo().username} \x1b[0m`);
            break;
          case '--architecture':
            console.log(`CPU architecture is \x1b[42m\x1b[30m\x1b[4m ${os.arch()} \x1b[0m`);
            break;
          default:
            break;
        }
  });
}
export { osData };
