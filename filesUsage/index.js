// Модуль FileSystem відповідає за роботу з файлами в Node.js.
// Сучасна ініціалізація модуля з промісами відбувається наступним чином:
const fs = require('fs').promises;
// або const fs = require('fs/promises');
// методи модуля fs з синхронними версіями (закінчуються на Sync) необхідно підключати так:
// const fs = require('fs');
// Але тоді всі функції, що підключаються, не повертають проміс і їм необхідний callback

fs.readFile(filename, [options]); // читання файлу. параметр data містить об'єкт типу Buffer
fs.writeFile(filename, data, [options]); // запис файлу
fs.appendFile(filename, data, [options]); // додавання у файл
fs.rename(oldPath, newPath); // перейменування файлу.
fs.unlink(path, callback); // видалення файлу.

// Найпростіший спосіб працювати з даними як з рядком, необхідно конвертувати data методом toString():
fs.readFile('readme.txt')
  .then(data => console.log(data.toString()))
  .catch(err => console.log(err.message));
