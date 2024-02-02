import path from 'path';
import fs from 'fs';
import { pipeline } from 'stream/promises';

const copyFile = async (mainPath, newPath) => {
  const pathToFile = path.resolve('.', mainPath);
  const pathToNewFile = path.resolve('.', newPath, path.basename(pathToFile));
  const readStream = fs.createReadStream(pathToFile, { encoding: 'utf-8' });
  const writeStream = fs.createWriteStream(pathToNewFile, { encoding: 'utf-8' });
  await pipeline(readStream, writeStream);
};

export { copyFile };
