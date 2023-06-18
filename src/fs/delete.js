import { join, dirname} from 'path';
import { fileURLToPath } from 'url';
import { unlink } from 'node:fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const removable = join(__dirname, 'files', 'fileToRemove.txt');

const remove = async () => {
    unlink(removable).catch(() => {throw new Error('FS operation failed')});
};

await remove();