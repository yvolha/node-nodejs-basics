const { createHash } = await import('node:crypto');
const hash = createHash('sha256');

import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { readFile } from 'fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const toHash = join(__dirname, 'files', 'fileToCalculateHashFor.txt');

const calculateHash = async () => {
    const contents = await readFile(toHash);
    hash.update(contents);
    process.stdout.write(hash.digest('hex'));
};

await calculateHash();