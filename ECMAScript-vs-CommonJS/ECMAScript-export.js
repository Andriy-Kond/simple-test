// Для використання ECMAScripts треба або дати файлам розширення .mjs, або у файлі package.json встановити поле "type" у значення "module".
export const info = msg => {
  console.log(`Info: ${msg}`);
};

export const log = msg => {
  console.log(`Log: ${msg}`);
};
