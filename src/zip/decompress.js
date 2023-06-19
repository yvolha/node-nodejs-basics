import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

import { createGunzip } from 'zlib';
import { pipeline } from 'stream';
import { createReadStream, createWriteStream} from 'node:fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const fileToDecompress = join(__dirname, 'files', 'archive.gz');
const decompressedFile = join(__dirname, 'files', 'fileToCompress.txt');

const decompress = async () => {
    const gunzip = createGunzip();
    const sourceStream = createReadStream(fileToDecompress);
    const resultStream = createWriteStream(decompressedFile);

    pipeline(sourceStream, gunzip, resultStream, (err) => {
        if (err) {
          process.stdout.write('An error occurred:', err);
        }
      });
};

await decompress();