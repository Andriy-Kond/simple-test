// Скрипт читатиме поточний каталог та виводити його вміст: ім'я файлу, його розмір та дату останньої зміни.

// const fs = require('fs').promises;
const fs = require('fs/promises');

// За допомогою змінної __dirname ми зчитуємо всі файли із поточного каталогу.
async function a() {
  return await fs
    .readdir(__dirname)
    // В внаслідок виконання промісу в змінну files ми отримаємо масив імен файлів та директорій з поточної директорії.
    .then(files => {
      console.log('a __dirname:', __dirname);
      console.log('a files:', files);
      // Потім ми повертаємо масив промісів з аналізом кожного елемента цього масиву.
      return Promise.all(
        files.map(async filename => {
          console.log('a >> filename:', filename);
          // Провести аналіз допомагає нам змінна stats, куди ми отримуємо інформацію про поточний файл.
          const stats = await fs.stat(filename);
          console.log('a >> filename:', filename);
          console.log('a >> stats:', stats.size);
          // Ми повертаємо об'єкт з:
          return {
            Name: filename, // ім'я файлу
            Size: stats.size, // час останньої зміни файлу
            Date: stats.mtime, // розмір файлу в байтах
          };
        })
      );
    })
    // Результат виконання цього промісу, змінна result
    .then(result => console.table(result));
}

const b = async () => {
  return await fs
    .readdir(__dirname)
    .then(files => {
      console.log('b __dirname:', __dirname);
      console.log('b files:', files);

      return Promise.all(
        files.map(async filename => {
          console.log('b >> filename:', filename);

          const stats = await fs.stat(filename);
          console.log('b >> filename:', filename);
          console.log('b >> stats:', stats.size);

          return {
            Name: filename,
            Size: stats.size,
            Date: stats.mtime,
          };
        })
      );
    })
    // Результат виконання цього промісу, змінна result
    .then(result => console.table(result));
};

module.exports = {
  a,
  b,
};
