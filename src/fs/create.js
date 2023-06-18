import { writeFile } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const baseFile = join(__dirname, '/files', 'fresh.txt');
const TEXT = 'I am fresh and young';

const create = async () => {
    writeFile(baseFile, TEXT, { flag: "wx" }, (err) => {
        if (err) throw new Error('FS operation failed');
    })
};

await create();