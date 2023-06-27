import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { createReadStream } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const baseFile = join(__dirname, 'files', 'fileToRead.txt');

const read = async () => {
    const currentStream = createReadStream(baseFile);
    let data = "";
    currentStream.on('data', (chunk) => {
        data += chunk;
    });
    currentStream.on('end', () => {
        process.stdout.write(data);
    })
};

await read();