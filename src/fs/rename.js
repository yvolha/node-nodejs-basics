import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { access, constants } from 'node:fs/promises';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const wrongName = join(__dirname, 'files', 'wrongFilename.txt');
const correctName = join(__dirname, 'files', 'properFilename.md');

const rename = async () => {
    const isFile = await access(correctName, constants.F_OK).then(() => true).catch(() => false);
    if (isFile) throw new Error('FS operation failed');

    fs.rename(wrongName, correctName, (err) => {
        if (err) throw new Error('FS operation failed');
    })
};

await rename();