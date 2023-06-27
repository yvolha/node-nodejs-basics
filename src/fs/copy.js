import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { cp } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const baseFolder = join(__dirname, 'files');
const copyFolder = join(__dirname, 'files_copy');

const copy = async () => {
    cp(baseFolder, copyFolder, {
        recursive: true, 
        force: false, 
        errorOnExist: true
    }, (err) => {
        if (err) throw new Error('FS operation failed');
    })
};

await copy();
