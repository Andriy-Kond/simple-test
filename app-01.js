// об'єкт Global це аналог об'єкта window із браузера
// До Global входять такі класи:
// Buffer – об'єкт використовується для операцій з бінарними даними.
// Process – об'єкт процесу, більшість даних знаходиться саме тут
// process.argv містить масив аргументів командного рядка
// process.cwd() повертає поточний робочий каталог
// process.chdir() виконує перехід в інший каталог
// process.exit() завершує процес із зазначеним у якості аргументу кодом: 0 – успішний код, будь-яке відмінне від 0 число, але найчастіше 1 – код помилки.
// process.nextTick(fn) запланує виконання зазначеної функції таким чином, що вказана функція буде виконана після закінчення поточної фази (поточного виконуваного коду), але перед початком наступної фази event loop.

// Метод require для підключення модулів не є глобальним і буде локальним для кожного модуля.

// module.export – об'єкт, який відповідає за те, що саме експортуватиме модуль під час використання require;
// __filename – ім'я файлу виконуваного скрипта (разом з абсолютним шляхом до нього)
// __dirname – абсолютний шлях до виконуваного скрипта.

import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('__filename:', __filename); // D:\Programming\JS-Node-Tests\Module-01\simple-test\app-01.js
console.log('__dirname:', __dirname); // D:\Programming\JS-Node-Tests\Module-01\simple-test

console.log('import.meta:', import.meta);

console.log('import.meta.url:', import.meta.url);
