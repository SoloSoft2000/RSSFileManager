# RSSFileManager

This application provides a set of operations for navigating directories, working with files, obtaining operating system information, performing hash calculations, and compressing/decompressing files using the Brotli algorithm.

## List of Operations and Syntax

### Navigation & Working Directory (nwd)

**up** - *Go Upper from Current Directory:*

**cd `path_to_directory`** - *Go to dedicated folder from current directory*
*For change drive on Windows OS must use `cd X:\`*

**ls** - *Print in console list of all files and folders in current directory*

---
### Operations with files

**cat `path_to_file`** - *Read file and print it's content in console*

**add`new_file_name`** - *Create empty file (`new_file_name` may content path`)*

**rm `path_to_file`** - *Delete file*

**rn `path_to_file` `new_filename`** - *Rename file (`new_file_name` may content path`)*

**cp `path_to_file` `path_to_new_directory`** - *Copy file*

**mv `path_to_file` `path_to_new_directory`** - *Move file*

---
### Operating system info

**os `parametres`** - *prints information in console, multiple parameters is allowed, for example `os --homedir --username`*

- `--EOL` - *Get EOL (default system End-Of-Line)*
- `--cpus` - *Get host machine CPUs info*
- `--homedir` - *Get home directory*
- `--username` - *Get current system user name*
- `--architecture` - *Get CPU architecture*

---
### Hash calculations and compress and decompress operations

**hash `path_to_file`** - *Calculate hash for file*

**compress `path_to_file` `path_to_destination`** - *Compress file (using Brotli algorithm). The new file will have the extension `.br`. If `path_to_destination` is not specified, the result will be saved in the current path `(./)`*

**decompress `path_to_file` `path_to_destination`** - *Decompress file (using Brotli algorithm). If `path_to_destination` is not specified, the result will be saved in the current path `(./)`*