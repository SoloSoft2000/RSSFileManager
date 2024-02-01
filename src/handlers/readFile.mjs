import path from 'path';
import fs from 'fs';

const readFile = async (fileForRead) => {
  return new Promise((response, reject) => {
    const pathToFile = path.resolve('.', fileForRead);
    const readStream = fs.createReadStream(pathToFile, { encoding: 'utf-8' });

    readStream.on('data', (chunk) => {
      console.log(chunk);
    });

    readStream.on('end', () => {
      response();
    });

    readStream.on('error', (error) => {
      console.log(error.message);
      reject();
    });
  });
};

export { readFile };
