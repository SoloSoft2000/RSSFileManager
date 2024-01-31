import { readdir } from 'fs/promises';
import { getCurrentPath } from './directory.mjs';

const list = async () => {
  const files = await readdir(getCurrentPath(), {withFileTypes: true});
  console.log(files.filter(file => file.isDirectory()).sort((a,b) => a.name - b.name));
  console.log(files.filter(file => file.isFile()).sort((a,b) => a.name - b.name));
}

export { list };
