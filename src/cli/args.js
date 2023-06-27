import { argv, stdout } from 'node:process';

const startIndex = 2;

const parseArgs = () => {
    argv.forEach((a, i) => {
        if (i > 1 && i % 2 === 0){
            stdout.write(`${a.substring(startIndex)} is `);
        } else if (i > 1 && i % 2 !== 0){
            stdout.write(`${a}, `);
        }
    })
};

parseArgs();