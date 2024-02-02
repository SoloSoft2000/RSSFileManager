import { Writable } from 'stream';

const createWriteToConsole = () => {
  return new Writable({
    write(chunk, _, callback) {
      console.log(chunk.toString());
      callback();
    }
  });
}

export default createWriteToConsole;
