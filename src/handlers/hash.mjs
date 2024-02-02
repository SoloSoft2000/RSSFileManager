import path from 'path';
import fs from 'fs';
import { pipeline } from 'stream/promises';
import crypto from 'crypto';
import createWriteToConsole from '../helpers/createWriteToConsole.mjs';

const hash = async (fileForRead) => {
  try {
    const pathToFile = path.resolve('.', fileForRead);
    const readStream = fs.createReadStream(pathToFile, { encoding: 'utf-8' });
    const writeStream = createWriteToConsole();
    const hash = crypto.createHash('sha256');
    hash.setEncoding('hex');
    await pipeline(readStream, hash, writeStream);
  } catch (error) {
    console.log(error.message);
    throw error;
  }
};

export { hash };
