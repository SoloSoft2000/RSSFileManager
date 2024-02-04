import path from 'path';
import fs from 'fs';
import { pipeline } from 'stream/promises';
import createWriteToConsole from '../helpers/createWriteToConsole.mjs';

const readFile = async (fileForRead) => {
  try {
    const pathToFile = path.resolve('.', fileForRead);
    const readStream = fs.createReadStream(pathToFile, { encoding: 'utf-8' });
    const writeStream = createWriteToConsole();
    await pipeline(readStream, writeStream);
  } catch (error) {
    console.log(error.message);
    throw error;
  }
};

export { readFile };
