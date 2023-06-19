import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

import { createGzip } from 'zlib';
import { pipeline } from 'stream';
import { createReadStream, createWriteStream} from 'node:fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const fileToCompress = join(__dirname, 'files', 'fileToCompress.txt');
const compressedFile = join(__dirname, 'files', 'archive.gz');

const compress = async () => {
    const gzip = createGzip();
    const sourceStream = createReadStream(fileToCompress);
    const resultStream = createWriteStream(compressedFile);

    pipeline(sourceStream, gzip, resultStream, (err) => {
        if (err) {
          process.stdout.write('An error occurred:', err);
        }
      });
};

await compress();