import { join, dirname} from 'path';
import { fileURLToPath } from 'url';
import { readdir } from 'fs/promises';
import { stdout } from 'process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const baseDir = join(__dirname, 'files');

const list = async () => {
    const names = await readdir(baseDir).catch(() => {
        throw new Error('FS operation failed');
    });
    for (const name of names) {
        stdout.write(name + '\n');
    }
};

await list();