import path from 'path';
import fs from 'fs/promises';

const removeFile = async (name) => {
  try {
    const pathToFile = path.resolve('.', name);
    await fs.rm(pathToFile);
  } catch (error) {
    console.log(error.message);
    throw error;
  }
}

export { removeFile };
