// fs.readFile(filename, [options]) - читання файлу
// fs.writeFile(filename, data, [options]) - запис файлу
// fs.appendFile(filename, data, [options])- додавання у файл
// fs.rename(oldPath, newPath) - перейменування файлу.
// fs.unlink(path, callback) - видалення файлу.

import fs from 'node:fs';
const fsPromise = fs.promises;

fs.writeFile('./text.txt');

fs.readFile();
