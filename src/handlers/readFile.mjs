import path from 'path';
import fs from 'fs';
import { Writable } from 'stream';
import { pipeline } from 'stream/promises';

const readFile = async (fileForRead) => {
  try {
    const pathToFile = path.resolve('.', fileForRead);
    const readStream = fs.createReadStream(pathToFile, { encoding: 'utf-8' });
    const writeStream = new Writable({
      write(chunk, _, callback) {
        console.log(chunk.toString());
        callback();
      }
    });
    await pipeline(readStream, writeStream);
  } catch (error) {
    console.error('Operation failed:', error.message);
    throw error;
  }
};

export { readFile };
