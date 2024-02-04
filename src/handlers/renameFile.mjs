import path from 'path';
import fs from 'fs/promises';

const renameFile = async (oldFileName, newFileName) => {
  try {
    const pathToOldFile = path.resolve('.', oldFileName);
    const pathToNewFile = path.resolve('.', newFileName);
    await fs.rename(pathToOldFile, pathToNewFile);
  } catch (error) {
    console.log(error.message);
    throw error;
  }
}

export { renameFile };
