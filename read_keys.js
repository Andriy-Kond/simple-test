// Зчитування результату по символу.
const readline = require('readline');
readline.emitKeypressEvents(process.stdin); // зчитуємо
process.stdin.setRawMode(true); // буде вводитись по одному символу автоматично. Без цього рядку можна вводити декілька символів

// event - "keypress"
process.stdin.on('keypress', (str, key) => {
  // str - символ, який отримали. key - ключ (об'єкт) цього символу
  console.log('process.stdin.on >> str:', str);
  console.log('process.stdin.on >> key:', key);

  if (key.ctrl && key.name == 'c') process.exit(); // без цього рядку не зможемо вийти з процесу (по ctrl+c). Треба буде убивати термінал.
});
