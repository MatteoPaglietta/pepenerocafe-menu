import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath, pathToFileURL } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.join(__dirname, '..', 'dist');
const ssrEntry = path.join(__dirname, '..', 'dist-ssr', 'entry-server.js');

const { render } = await import(pathToFileURL(ssrEntry).href);
const appHtml = render();

const indexPath = path.join(distDir, 'index.html');
const template = readFileSync(indexPath, 'utf-8');
const finalHtml = template.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);

if (finalHtml === template) {
  throw new Error('Prerender failed: <div id="root"></div> placeholder not found in dist/index.html');
}

writeFileSync(indexPath, finalHtml);
console.log(`Prerendered ${appHtml.length} chars of static markup into dist/index.html`);
