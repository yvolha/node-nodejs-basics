import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { createWriteStream } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const baseFile = join(__dirname, 'files', 'fileToWrite.txt');

const write = async () => {
    process.stdout.write("Please type something and press 'Enter' to save it in './files/fileToWrite.txt' \n");
    const writeStream = createWriteStream(baseFile);

    process.stdin.pipe(writeStream);

    process.on('SIGINT', () => {
        writeStream.end();
        process.stdout.write("Thank you for typing with us!");
        process.exit();
    });
};

await write();