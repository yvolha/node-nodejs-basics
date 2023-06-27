import { stdin, stdout } from 'process';
import { Transform } from 'stream';

const transform = async () => {
    stdout.write("Please type something and press 'Enter' and we'll reverse it for you. \n");

    const reverseChars = new Transform({
        transform(chunk, enc, cllb) {
            cllb(null, String(chunk).trim().split('').reverse().join('')+'\n');
        }
    })

    stdin.pipe(reverseChars).pipe(stdout);
};

await transform();