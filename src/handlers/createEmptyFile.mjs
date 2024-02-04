import path from 'path';
import fs from 'fs/promises';

const createEmptyFile = async (name) => {
  try {
    const pathToFile = path.resolve('.', name);
    await fs.appendFile(pathToFile, '', 'utf-8');
  } catch (error) {
    console.log(error.message);
    throw error;
  }
}

export { createEmptyFile };
