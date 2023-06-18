import { dirname, join} from 'path';
import { fileURLToPath } from 'url';
import { readFile } from 'fs/promises';
import { stdout } from 'process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const writeable = join(__dirname, 'files', 'fileToRead.txt');

const read = async () => {
    const contents = await readFile(writeable)
    .catch(() => {
        throw new Error('FS operation failed');
    });
    
    stdout.write(contents);
};

await read();