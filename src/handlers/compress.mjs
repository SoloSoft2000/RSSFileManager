import path from 'path';
import fs from 'fs';
import { pipeline } from 'stream/promises';
import { createBrotliCompress, createBrotliDecompress } from 'zlib';

const compressDecompress = async (actionFlag, mainPathToFile, newPath) => {
  try {
    const brotliStream = actionFlag === 'compress' ? createBrotliCompress() : createBrotliDecompress();

    const pathToFile = path.resolve('.', mainPathToFile);
    const pathToNewFile = path.resolve('.', newPath || '.',
      actionFlag === 'compress' ?
        `${path.basename(pathToFile)}.br` : path.basename(pathToFile, '.br'));
    const readStream = fs.createReadStream(pathToFile);
    const writeStream = fs.createWriteStream(pathToNewFile);

    await pipeline(readStream, brotliStream, writeStream);
  } catch (error) {
    console.log(error.message);
    throw error;
  }

};

export { compressDecompress };
