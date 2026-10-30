import { readFile, writeFile } from 'node:fs/promises';
const root = new URL('../', import.meta.url);
const data = JSON.parse(await readFile(new URL('data.json', root), 'utf8'));
await writeFile(new URL('data.js', root), 'window.WOH_DATA = ' + JSON.stringify(data, null, 2) + ';\n');
console.log('Updated data.js from data.json. Run npm run check next.');
