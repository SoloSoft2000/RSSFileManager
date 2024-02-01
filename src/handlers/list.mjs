import { readdir } from 'fs/promises';
import { getCurrentPath } from './directory.mjs';

const list = () => {
  return readdir('.', {withFileTypes: true})
    .then((dirItems) => {
      const folders = dirItems.filter(item => item.isDirectory());
      const files = dirItems.filter(item => !item.isDirectory());
      const result = [
        ...folders.sort((a, b) => a.name - b.name).map((folder) => {return {name: folder.name, type: 'directory'}}),
        ...files.sort((a, b) => a.name - b.name).map((file) => {return {name: file.name, type: 'file'}})
      ]
      console.table(result);
    })
}

export { list };
