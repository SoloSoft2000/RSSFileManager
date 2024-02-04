import { readdir } from 'fs/promises';

const list = async () => {
  const dirItems = await readdir('.', { withFileTypes: true });
  const folders = dirItems.filter(folder => folder.isDirectory());
  const files = dirItems.filter(file => !file.isDirectory());
  const result = [
    ...folders.sort((a, b) => a.name - b.name).map((folder) => { return { name: folder.name, type: 'directory' }; }),
    ...files.sort((a_1, b_1) => a_1.name - b_1.name).map((file) => { return { name: file.name, type: 'file' }; })
  ];
  console.table(result);
}

export { list };
