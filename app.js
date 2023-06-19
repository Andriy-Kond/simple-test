// const { a, b } = require('./filesUsage/fileInfo');

const { b } = require('./fileInfoCopy.js');
const path = require('path');

// a();

const d = async () => {
  return await b();
};

d();

// const fs = require('fs').promises;

// const c = async () => {
//   return await fs
//     .readdir(__dirname)
//     .then(files => {
//       console.log('b __dirname:', __dirname);
//       console.log('b files:', files);

//       return Promise.all(
//         files.map(async filename => {
//           console.log('b >> filename:', filename);

//           const stats = await fs.stat(filename);
//           console.log('b >> filename:', filename);
//           console.log('b >> stats:', stats.size);

//           return {
//             Name: filename,
//             Size: stats.size,
//             Date: stats.mtime,
//           };
//         })
//       );
//     })
//     // Результат виконання цього промісу, змінна result
//     .then(result => console.table(result));
// };

// c();
