import path from 'path';
import { fileURLToPath } from 'url';
// console.log('fileURLToPath:', fileURLToPath)

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('__filename:', __filename);
console.log('__dirname:', __dirname);

console.log('import.meta:', import.meta);

console.log('import.meta.url:', import.meta.url);
