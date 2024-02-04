import { copyFile } from './copyFile.mjs';
import { removeFile } from './removeFile.mjs';

const moveFile = async (mainPath, newPath) => {
  try {
    await copyFile(mainPath, newPath);
    await removeFile(mainPath);
  } catch (error) {
    console.log(error.message);
    throw error;
  }
};

export { moveFile };
